import { createContext, useContext, useState, useEffect } from "react";
import { meCore, MeIdentity } from "./Logic";
const MeContext = createContext<{ me: MeIdentity | null }>({ me: null });
export const MeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [me, setMe] = useState<MeIdentity | null>(null);

  useEffect(() => {
    meCore.init().then(setMe);
  }, []);

  return <MeContext.Provider value={{ me }}>{children}</MeContext.Provider>;
};

export const useMe = () => useContext(MeContext);