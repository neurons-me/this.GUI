// src/components/me/meCore.ts
export type MeIdentity = { username: string; publicKey?: string; context?: string };

export const meCore = {
  state: { identity: null as MeIdentity | null, initialized: false },

  async init() {
    let identity: MeIdentity | null = null;

    try {
      const res = await fetch("http://localhost:7070/who");
      if (res.ok) identity = await res.json();
    } catch (_) {
      const stored = localStorage.getItem("this.me");
      if (stored) identity = JSON.parse(stored);
    }

    if (!identity) {
      identity = { username: "guest", context: "browser" };
      localStorage.setItem("this.me", JSON.stringify(identity));
    }

    this.state.identity = identity;
    this.state.initialized = true;
    return identity;
  },

  who() {
    return this.state.identity;
  },
};