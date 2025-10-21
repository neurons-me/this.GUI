

import React, { useState } from "react";
import { Box, Typography, Divider, Button, Stack, Paper } from "@/gui/components/atoms";
import Icon from "@/gui/Theme/Icon/Icon";

const staticServices = [
  {
    domain: "neurons.me",
    status: "active",
    provider: "Namecheap",
    expiration: "2027-04-02",
    emails: ["admin@neurons.me", "support@neurons.me"],
    notes: "Primary neural platform domain."
  },
  {
    domain: "cleaker.com",
    status: "active",
    provider: "GoDaddy",
    expiration: "2025-12-15",
    emails: ["info@cleaker.com"],
    notes: "Identity & login service."
  },
  {
    domain: "netget.org",
    status: "expired",
    provider: "Google Domains",
    expiration: "2022-08-10",
    emails: [],
    notes: "Renewal pending."
  },
  {
    domain: "ai-space.net",
    status: "active",
    provider: "Namecheap",
    expiration: "2026-03-21",
    emails: ["owner@ai-space.net", "contact@ai-space.net"],
    notes: "AI experiments and demos."
  }
];

function generateHash(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

export default function RootDomain() {
  const [chain, setChain] = useState(() => {
    const genesis = {
      id: 0,
      timestamp: new Date().toISOString(),
      data: "Genesis Block",
      hash: generateHash("Genesis Block"),
    };
    return [genesis];
  });

  const addBlock = (data: string) => {
    const last = chain[chain.length - 1];
    const blockData = `${last.hash}-${data}-${Date.now()}`;
    const newBlock = {
      id: chain.length,
      timestamp: new Date().toISOString(),
      data,
      hash: generateHash(blockData),
    };
    setChain([...chain, newBlock]);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6">Domains</Typography>
        <Divider sx={{ my: 1 }} />
        {staticServices.map((svc, idx) => (
          <Box key={svc.domain + idx} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {svc.domain}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.9em" }}>
              Status: {svc.status} &nbsp;|&nbsp; Provider: {svc.provider} &nbsp;|&nbsp; Expiration: {svc.expiration}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.9em" }}>
              Emails: {svc.emails && svc.emails.length > 0 ? svc.emails.join(", ") : <span style={{ color: "#aaa" }}>None</span>}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary" }}>
              {svc.notes}
            </Typography>
          </Box>
        ))}
      </Paper>

   
    </Box>
  );
}