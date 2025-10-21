import { useState, useEffect } from "react";
import { me } from "this.me";
/**
 * ✅ useMe - React bridge for `.me`
 * Keeps React in sync with the live `me` instance.
 */
export default function useMe() {
  const [status, setStatus] = useState(me.state.status);
  const [listUs, setListUs] = useState(me.state.listUs || []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // ✅ Sync React state with me instance
    const handleStatusChange = () => setStatus({ ...me.state.status });
    const handleListUsChange = () => setListUs([...me.state.listUs]);
    me.on("statusChange", handleStatusChange);
    me.on("listUsChange", handleListUsChange);
    // Initial load
    (async () => {
      setLoading(true);
      await me.status(); // triggers internal update
      await me.listUs(); // updates list
      setLoading(false);
    })();
    return () => {
      me.off("statusChange", handleStatusChange);
      me.off("listUsChange", handleListUsChange);
    };
  }, []);
  return {
    status,
    listUs,
    loading,
    checkStatus: () => me.status(),
    fetchListUs: () => me.listUs(),
    loadMe: (alias, hash) => me.loadMe(alias, hash),
  };
}