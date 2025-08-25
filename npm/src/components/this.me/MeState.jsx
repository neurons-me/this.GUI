import MeActive from "./MeActive";
import MeInactive from "./MeInactive";
import MeListUs from "./MeListUs";
import useMe from "./hooks/useMe";

export default function MeState() {
  const { status, view, changeView, checkStatus } = useMe();

  return (
    <>
      {view === "inactive" && <MeInactive onRetry={checkStatus} />}

      {view === "status" && (
        <MeActive status={status} onGoListUs={() => changeView("list-us")} />
      )}

      {view === "list-us" && (
        <MeListUs
          list={Array.isArray(status.data?.listUs) ? status.data.listUs : []}
          onBack={() => changeView("status")}
        />
      )}
    </>
  );
}