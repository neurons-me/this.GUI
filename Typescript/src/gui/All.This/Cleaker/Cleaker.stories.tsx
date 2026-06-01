import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { Meta } from "@storybook/react";
import ME from "this.me";
import { alpha } from "@mui/material/styles";
import Box from "@/gui/Atoms/Box/Box";
import Button from "@/gui/Atoms/Button/Button";
import Chip from "@/gui/Atoms/Chip/Chip";
import Paper from "@/gui/Atoms/Paper/Paper";
import Typography from "@/gui/Atoms/Typography/Typography";
import { useGuiTheme } from "@/gui-internals/Hooks";
import Cleaker from "./Cleaker";

const meta: Meta<typeof Cleaker> = {
  title: "All.This/Cleaker/Cleaker",
  component: Cleaker,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const ME_SEED = "tetragrammaton";
const ME_NAMESPACE = "me.space";
const ME_EXPRESSION = "me";
const CLEAKER_INTENT = "cleaker(me)";

type ProofStatus = "proving" | "verified" | "error";

type ProofState = {
  status: ProofStatus;
  issuedAt: string;
  nonce: string;
  challenge: string;
  publicKey: string;
  fingerprint: string;
  signature: string;
  verified: boolean;
  memories: number;
  error: string;
};

const initialProofState: ProofState = {
  status: "proving",
  issuedAt: "",
  nonce: "",
  challenge: "",
  publicKey: "",
  fingerprint: "",
  signature: "",
  verified: false,
  memories: 0,
  error: "",
};

function toUint8Array(buffer: ArrayBuffer) {
  return new Uint8Array(buffer);
}

function bytesToHex(bytes: Uint8Array) {
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function toBase64Url(buffer: ArrayBuffer) {
  let binary = "";
  toUint8Array(buffer).forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function shortHash(value: string, head = 14, tail = 10) {
  if (!value) return "";
  if (value.length <= head + tail + 1) return value;
  return `${value.slice(0, head)}...${value.slice(-tail)}`;
}

async function sha256Hex(buffer: ArrayBuffer) {
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return bytesToHex(toUint8Array(digest));
}

function createNonce() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
}

function createLocalMe() {
  const me = new ME(ME_SEED) as any;
  if (typeof me?.["@"] === "function") {
    me["@"](ME_EXPRESSION);
  }
  const inspected = typeof me?.inspect === "function" ? me.inspect({ last: 12 }) : null;
  return {
    me,
    memories: Array.isArray(inspected?.memories) ? inspected.memories.length : 1,
  };
}

async function createCleakerProof(): Promise<ProofState> {
  if (!globalThis.crypto?.subtle) {
    throw new Error("WebCrypto subtle API is not available in this browser.");
  }

  const { memories } = createLocalMe();
  const issuedAt = new Date().toISOString();
  const nonce = createNonce();
  const challengePayload = {
    protocol: "cleaker.proof.v1",
    seed: ME_SEED,
    namespace: ME_NAMESPACE,
    expression: `me[@]("${ME_EXPRESSION}")`,
    intent: CLEAKER_INTENT,
    nonce,
    issuedAt,
  };
  const challenge = JSON.stringify(challengePayload, null, 2);
  const data = new TextEncoder().encode(challenge);
  const keyPair = (await crypto.subtle.generateKey(
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign", "verify"],
  )) as CryptoKeyPair;
  const publicKeyBuffer = await crypto.subtle.exportKey("spki", keyPair.publicKey);
  const signatureBuffer = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    keyPair.privateKey,
    data,
  );
  const verified = await crypto.subtle.verify(
    { name: "ECDSA", hash: "SHA-256" },
    keyPair.publicKey,
    signatureBuffer,
    data,
  );

  return {
    status: verified ? "verified" : "error",
    issuedAt,
    nonce,
    challenge,
    publicKey: toBase64Url(publicKeyBuffer),
    fingerprint: await sha256Hex(publicKeyBuffer),
    signature: toBase64Url(signatureBuffer),
    verified,
    memories,
    error: verified ? "" : "Signature verification failed.",
  };
}

function ProofLine({
  label,
  value,
  soft = false,
}: {
  label: string;
  value: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 0.5,
        minWidth: 0,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: "text.secondary",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: soft ? "text.secondary" : "text.primary",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          lineHeight: 1.5,
          overflowWrap: "anywhere",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

function CleakerProof() {
  const theme = useGuiTheme();
  const [proof, setProof] = useState<ProofState>(initialProofState);
  const [runId, setRunId] = useState(0);

  const colors = useMemo(() => {
    const primary = theme.palette.primary.main;
    const divider = theme.palette.divider;
    const dark = theme.palette.mode === "dark";
    return {
      bg: dark ? "rgb(5, 5, 5)" : theme.palette.background.default,
      shell: dark ? "rgba(11, 12, 13, 0.88)" : "rgba(255, 255, 255, 0.9)",
      panel: dark ? "rgba(15, 16, 18, 0.92)" : "rgba(250, 250, 250, 0.92)",
      line: alpha(divider, dark ? 0.52 : 0.8),
      glow: alpha(primary, dark ? 0.16 : 0.1),
      primary,
    };
  }, [theme]);

  const prove = useCallback(() => {
    setProof(initialProofState);
    createCleakerProof()
      .then(setProof)
      .catch((error) => {
        setProof({
          ...initialProofState,
          status: "error",
          error: error?.message || String(error),
        });
      });
  }, []);

  useEffect(() => {
    prove();
  }, [prove, runId]);

  const statusLabel = proof.status === "verified" ? "verified" : proof.status === "error" ? "error" : "proving";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: colors.bg,
        color: "text.primary",
        display: "grid",
        placeItems: "center",
        px: { xs: 1.5, sm: 2.5, md: 4 },
        py: { xs: 2, md: 5 },
        boxSizing: "border-box",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: "min(100%, 920px)",
          borderRadius: 3,
          borderColor: colors.line,
          bgcolor: colors.shell,
          backgroundImage: `radial-gradient(circle at 34% 20%, ${colors.glow}, transparent 34%)`,
          boxShadow: "0 30px 90px rgba(0,0,0,0.42)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, sm: 3 },
            py: { xs: 2.25, sm: 3 },
            borderBottom: "1px solid",
            borderColor: colors.line,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "grid", gap: 0.65, minWidth: 0 }}>
            <Typography variant="h5" sx={{ fontWeight: 500, letterSpacing: 0, lineHeight: 1.1 }}>
              {CLEAKER_INTENT}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
              `.me` signs its local namespace expression.
            </Typography>
          </Box>
          <Chip
            size="small"
            color={proof.status === "verified" ? "primary" : proof.status === "error" ? "error" : "default"}
            label={statusLabel}
            variant={proof.status === "verified" ? "filled" : "outlined"}
          />
        </Box>

        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          <Box sx={{ display: "grid", gap: 1.5, alignContent: "start" }}>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                borderRadius: 2.5,
                bgcolor: colors.panel,
                borderColor: colors.line,
                display: "grid",
                gap: 1.4,
              }}
            >
              <ProofLine label=".me seed" value={ME_SEED} />
              <ProofLine label="namespace" value={ME_NAMESPACE} />
              <ProofLine label="expression" value={`me[@]("${ME_EXPRESSION}")`} />
              <ProofLine label="kernel" value={`${proof.memories || 1} local memory`} soft />
            </Paper>

            <Paper
              variant="outlined"
              sx={{
                p: 2,
                borderRadius: 2.5,
                bgcolor: colors.panel,
                borderColor: colors.line,
                display: "grid",
                gap: 1.4,
              }}
            >
              <ProofLine label="public fingerprint" value={proof.fingerprint ? shortHash(proof.fingerprint) : "..."} />
              <ProofLine label="private key" value="hidden in local proof session" soft />
              <ProofLine label="signature" value={proof.signature ? shortHash(proof.signature, 18, 14) : "..."} />
            </Paper>
          </Box>

          <Paper
            variant="outlined"
            sx={{
              p: 2,
              borderRadius: 2.5,
              bgcolor: colors.panel,
              borderColor: colors.line,
              minWidth: 0,
              display: "grid",
              gap: 1.35,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                proof packet
              </Typography>
              <Button
                size="small"
                variant="outlined"
                onClick={() => setRunId((value) => value + 1)}
              >
                renew
              </Button>
            </Box>

            <ProofLine label="issued" value={proof.issuedAt || "..."} soft />
            <ProofLine label="nonce" value={proof.nonce || "..."} soft />
            <Box
              component="pre"
              sx={{
                m: 0,
                p: 1.5,
                minHeight: 170,
                borderRadius: 2,
                border: "1px solid",
                borderColor: colors.line,
                bgcolor: "rgba(0,0,0,0.18)",
                color: proof.status === "error" ? "error.main" : "text.secondary",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: 12,
                lineHeight: 1.55,
                whiteSpace: "pre-wrap",
                overflowWrap: "anywhere",
              }}
            >
              {proof.status === "error" ? proof.error : proof.challenge || "creating local proof..."}
            </Box>
            <Typography variant="body2" sx={{ color: proof.verified ? colors.primary : "text.secondary" }}>
              {proof.verified
                ? "this me.space expression verified against the public proof"
                : "waiting for local signature"}
            </Typography>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}

export const Default = () => <CleakerProof />;

export const Runtime = () => <Cleaker />;
