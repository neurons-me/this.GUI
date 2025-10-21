import React, { useEffect, useMemo, useRef, useState } from "react";
/**
 * Free-Form Computing Interface — "Uncontained UI"
 * -------------------------------------------------
 * Goals
 *  - No rigid panes. The canvas is the app.
 *  - Spawn dynamic compute nodes anywhere.
 *  - Each node can run small JS snippets in a sandboxed Web Worker.
 *  - Command palette (⌘K / Ctrl+K) to keep flow keyboard-first.
 *  - Minimal, calm visuals; soft physics-like feel.
 *
 * Notes
 *  - Tailwind is available by default in this environment.
 *  - No external libs are required; this is a single-file prototype.
 */
// --- Utility: Create a sandbox worker for safe-ish JS eval (no DOM access) ---
function useWorker() {
  const workerRef = useRef<Worker | null>(null);
  const getWorker = () => {
    if (workerRef.current) return workerRef.current;
    const workerCode = `
      self.onmessage = async (e) => {
        const { id, code } = e.data;
        try {
          // Basic sandbox: no access to self except postMessage; no DOM.
          const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
          const fn = new AsyncFunction('__post', ` +
            "'use strict';\n" +
            // eslint-disable-next-line
            "const console = {\n" +
            "  log: (...a) => __post({type:'log', data:a}),\n" +
            "  visual: (shape) => __post({type:'visual', data:shape}),\n" +
            "  speak: (msg) => __post({type:'speak', data:msg})\n" +
            "};\n" +
            "return (async () => {\n" +
            "  " +
            "${code}\n" +
            "})()" +
          `);
          let logs = [];
          const __post = (msg) => {
            if (msg.type === 'log') logs.push(msg.data);
            self.postMessage({ id, stream: true, ...msg });
          };
          const result = await fn(__post);
          self.postMessage({ id, ok: true, result, logs });
        } catch (err) {
          self.postMessage({ id, ok: false, error: String(err) });
        }
      };
    `;
    const blob = new Blob([workerCode], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const w = new Worker(url);
    workerRef.current = w;
    return w;
  };

  useEffect(() => {
    return () => {
      if (workerRef.current) workerRef.current.terminate();
      workerRef.current = null;
    };
  }, []);

  return getWorker;
}

// Types
interface NodeData {
  id: string;
  x: number;
  y: number;
  code: string;
  output: string;
  running: boolean;
}

export default function UncontainedUI() {
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [grid, setGrid] = useState(true);
  const [hint, setHint] = useState(true);
  const getWorker = useWorker();
  // background pointer position — for subtle parallax sparks
  const [ptr, setPtr] = useState({ x: 0.5, y: 0.5 });
  // Command palette actions
  const actions = useMemo(
    () => [
      { id: "spawn", label: "Spawn compute node", run: () => spawnNode() },
      { id: "grid", label: grid ? "Hide grid" : "Show grid", run: () => setGrid((g) => !g) },
      { id: "clear", label: "Clear all nodes", run: () => setNodes([]) },
    ],
    [grid]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  function spawnNode(x?: number, y?: number) {
    const id = Math.random().toString(36).slice(2);
    const nx = x ?? window.innerWidth * (0.35 + Math.random() * 0.3);
    const ny = y ?? window.innerHeight * (0.35 + Math.random() * 0.3);
    const starter = `// async JS — logs show below.\n// Example: generate points on a circle\nconst pts = Array.from({length: 8}, (_,i)=>({\n  x: Math.cos(i/8*2*Math.PI).toFixed(3),\n  y: Math.sin(i/8*2*Math.PI).toFixed(3)\n}));\nconsole.log('pts', pts);\nreturn pts;`;
    setNodes((n) => [
      ...n,
      { id, x: nx, y: ny, code: starter, output: "", running: false },
    ]);
    setHint(false);
  }

  function runNode(node: NodeData) {
    const worker = getWorker();
    const id = node.id + ":" + Date.now();
    setNodes((list) => list.map((n) => (n.id === node.id ? { ...n, running: true, output: "" } : n)));
    const onMessage = (e: MessageEvent) => {
      const msg = e.data;
      if (!msg || typeof msg !== "object") return;
      if (!String(msg.id).startsWith(node.id)) return;
      if (msg.stream && msg.type === "log") {
        setNodes((list) =>
          list.map((n) => (n.id === node.id ? { ...n, output: (n.output || "") + "\n" + JSON.stringify(msg.data) } : n))
        );
        return;
      }
      if (msg.stream && msg.type === 'visual') {
        setNodes((list) =>
          list.map((n) =>
            n.id === node.id
              ? { ...n, output: (n.output || '') + '\n[visual] ' + JSON.stringify(msg.data) }
              : n
          )
        );
        return;
      }
      if (msg.stream && msg.type === 'speak') {
        const utter = new SpeechSynthesisUtterance(String(msg.data));
        window.speechSynthesis.speak(utter);
        setNodes((list) =>
          list.map((n) =>
            n.id === node.id
              ? { ...n, output: (n.output || '') + '\n[speak] ' + JSON.stringify(msg.data) }
              : n
          )
        );
        return;
      }
      if (msg.ok) {
        setNodes((list) =>
          list.map((n) =>
            n.id === node.id
              ? {
                  ...n,
                  running: false,
                  output:
                    (n.output ? n.output + "\n\n" : "") +
                    "result => " + JSON.stringify(msg.result, null, 2),
                }
              : n
          )
        );
        worker.removeEventListener("message", onMessage);
      } else {
        setNodes((list) =>
          list.map((n) => (n.id === node.id ? { ...n, running: false, output: "error => " + msg.error } : n))
        );
        worker.removeEventListener("message", onMessage);
      }
    };

    worker.addEventListener("message", onMessage);
    worker.postMessage({ id, code: node.code });
  }

  // Drag logic for nodes (very lightweight)
  function useDrag(nodeId: string) {
    const posRef = useRef<{ dx: number; dy: number } | null>(null);
    const onDown = (e: React.PointerEvent) => {
      const target = (e.currentTarget as HTMLElement).closest('[data-node]') as HTMLElement | null;
      if (!target) return;
      const id = target.dataset.node as string;
      const node = nodes.find((n) => n.id === id);
      if (!node) return;
      posRef.current = { dx: e.clientX - node.x, dy: e.clientY - node.y };
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onMove = (e: React.PointerEvent) => {
      if (!posRef.current) return;
      const { dx, dy } = posRef.current;
      setNodes((list) => list.map((n) => (n.id === nodeId ? { ...n, x: e.clientX - dx, y: e.clientY - dy } : n)));
    };

    const onUp = (e: React.PointerEvent) => {
      posRef.current = null;
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    return { onPointerDown: onDown, onPointerMove: onMove, onPointerUp: onUp };
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden select-none"
      onPointerMove={(e) => setPtr({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })}
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            grid
              ? `radial-gradient(500px circle at ${ptr.x * 100}% ${ptr.y * 100}%, rgba(0,0,0,0.06), transparent 60%),
                 linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`
              : `radial-gradient(600px circle at ${ptr.x * 100}% ${ptr.y * 100}%, rgba(0,0,0,0.075), transparent 55%)`,
          backgroundSize: grid ? "cover, 32px 32px, 32px 32px" : "cover",
          backgroundColor: "#fafafa",
        }}
      />

      {/* Floating help hint */}
      {hint && (
        <div className="pointer-events-none fixed top-6 left-1/2 -translate-x-1/2 text-center text-sm text-neutral-600">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-black/5">
            <kbd className="rounded bg-black/80 px-1.5 py-0.5 text-white">⌘K</kbd>
            <span>Open command palette</span>
            <span className="mx-2">·</span>
            <span>Click to spawn a node</span>
          </div>
        </div>
      )}

      {/* Click-to-spawn layer */}
      <div
        className="absolute inset-0 -z-10"
        onDoubleClick={(e) => spawnNode(e.clientX, e.clientY)}
        onClick={(e) => {
          // soft spawn near cursor on click (not double)
          if ((e.target as HTMLElement).closest('[data-node]')) return;
          spawnNode(e.clientX + 16, e.clientY + 16);
        }}
      />

      {/* Nodes */}
      {nodes.map((node) => (
        <NodeView key={node.id} node={node} onRun={() => runNode(node)} updateNode={setNodes} useDrag={useDrag} />
      ))}

      {/* Command palette */}
      {paletteOpen && (
        <Palette actions={actions} onClose={() => setPaletteOpen(false)} />
      )}
    </div>
  );
}

function NodeView({ node, onRun, updateNode, useDrag }: {
  node: NodeData;
  onRun: () => void;
  updateNode: React.Dispatch<React.SetStateAction<NodeData[]>>;
  useDrag: (id: string) => any;
}) {
  const drag = useDrag(node.id);
  return (
    <div
      data-node={node.id}
      style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
      className="absolute max-w-[520px] w-[520px] rounded-2xl shadow-xl bg-white/80 backdrop-blur ring-1 ring-black/10"
    >
      <div className="flex items-center justify-between gap-2 rounded-t-2xl px-4 py-2 cursor-grab active:cursor-grabbing"
           {...drag}
      >
        <div className="flex items-center gap-2 text-sm text-neutral-700">
          <div className={`h-2.5 w-2.5 rounded-full ${node.running ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'}`} />
          <span>compute-node</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>drag</span>
        </div>
      </div>
      <div className="px-4 pb-3">
        <textarea
          value={node.code}
          onChange={(e) => updateNode((list) => list.map((n) => (n.id === node.id ? { ...n, code: e.target.value } : n)))}
          className="w-full h-40 resize-y rounded-xl border border-neutral-200 bg-white/70 px-3 py-2 font-mono text-[12.5px] leading-5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/10"
        />
        <div className="mt-2 flex items-center justify-between">
          <button
            onClick={onRun}
            className="rounded-xl bg-black text-white px-3 py-1.5 text-sm shadow hover:shadow-md active:scale-[.99]"
          >
            {node.running ? "Running…" : "Run (worker)"}
          </button>
          <button
            onClick={() => updateNode((list) => list.filter((n) => n.id !== node.id))}
            className="rounded-xl px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100"
          >
            Close
          </button>
        </div>
        <pre className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap rounded-xl bg-neutral-50/80 p-3 text-[12.5px] text-neutral-800 ring-1 ring-neutral-200">
{node.output || "// output will appear here"}
        </pre>
      </div>
    </div>
  );
}

function Palette({ actions, onClose }: { actions: { id: string; label: string; run: () => void }[]; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const list = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 grid place-items-start p-6 pt-24 bg-black/30" onClick={onClose}>
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl ring-1 ring-black/10" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          placeholder="Type a command… (spawn, grid, clear)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-0 border-b border-neutral-200 bg-transparent px-4 py-3 text-[15px] focus:outline-none"
        />
        <div className="max-h-72 overflow-auto">
          {list.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                a.run();
                onClose();
              }}
              className="block w-full text-left px-4 py-3 text-[15px] hover:bg-neutral-50"
            >
              {a.label}
            </button>
          ))}
          {list.length === 0 && (
            <div className="px-4 py-6 text-sm text-neutral-500">No results</div>
          )}
        </div>
      </div>
    </div>
  );
}
