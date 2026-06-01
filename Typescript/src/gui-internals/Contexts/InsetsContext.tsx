// src/themes/contexts/InsetsContext.tsx
import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
type Insets = { top: number; right: number; bottom: number; left: number; nav: number };
type InsetsContextType = {
  insets: Insets;
  updateInsets: (next: Partial<Insets>, source?: string) => void;
};

export const InsetsContext = createContext<InsetsContextType | undefined>(undefined);

const ZERO_INSETS: Insets = { top: 0, right: 0, bottom: 0, left: 0, nav: 0 };

function normalizeInsetPatch(next: Partial<Insets>): Partial<Insets> {
  const normalized: Partial<Insets> = {};
  (Object.keys(ZERO_INSETS) as Array<keyof Insets>).forEach((key) => {
    const value = next[key];
    if (typeof value === 'number' && Number.isFinite(value)) {
      normalized[key] = value;
    }
  });
  return normalized;
}

function sumInsetSources(sources: Record<string, Partial<Insets>>): Insets {
  const total = { ...ZERO_INSETS };
  Object.values(sources).forEach((sourceInsets) => {
    total.top += Number(sourceInsets.top ?? 0);
    total.right += Number(sourceInsets.right ?? 0);
    total.bottom += Number(sourceInsets.bottom ?? 0);
    total.left += Number(sourceInsets.left ?? 0);
    total.nav += Number(sourceInsets.nav ?? 0);
  });
  return total;
}

export const InsetsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [insetSources, setInsetSources] = useState<Record<string, Partial<Insets>>>({});

  const updateInsets = useCallback((next: Partial<Insets>, source = 'default') => {
    const patch = normalizeInsetPatch(next);
    setInsetSources((prev) => ({
      ...prev,
      [source]: {
        ...(prev[source] ?? {}),
        ...patch,
      },
    }));
  }, []);

  const insets = useMemo(() => sumInsetSources(insetSources), [insetSources]);

  useEffect(() => {
    const { top, right, bottom, left, nav } = insets;
    document.documentElement.style.setProperty('--gui-inset-top', `${top}px`);
    document.documentElement.style.setProperty('--gui-inset-right', `${right}px`);
    document.documentElement.style.setProperty('--gui-inset-bottom', `${bottom}px`);
    document.documentElement.style.setProperty('--gui-inset-left', `${left}px`);
    document.documentElement.style.setProperty('--gui-nav-height', `${nav || top}px`);
  }, [insets]);

  return (
    <InsetsContext.Provider value={{ insets, updateInsets }}>
      {children}
    </InsetsContext.Provider>
  );
};

export const useInsetsContext = () => {
  const context = useContext(InsetsContext);
  if (!context) {
    throw new Error('useInsetsContext must be used within an InsetsProvider');
  }
  return context;
};
