import FlowCanvas from "../components/canvas/FlowCanvas";

function Workspace() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold">
        Workspace
      </h1>

      <p className="mt-3 text-zinc-400">
        Cotton UI visual workspace powered by React Flow.
      </p>

      <div className="mt-8 flex-1 min-h-[500px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
        <FlowCanvas />
      </div>
    </div>
  );
}

export default Workspace;