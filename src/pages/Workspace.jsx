import FlowCanvas from "../components/canvas/FlowCanvas";
import NodePalette from "../components/workspace/NodePalette";

function Workspace() {
  return (
    <div className="flex h-[calc(100vh-180px)] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
      <NodePalette />

      <div className="flex flex-1 flex-col">
        <div className="border-b border-zinc-800 px-5 py-4">
          <h1 className="text-lg font-bold text-white">
            Cotton Flow Editor
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Visual Backend Request Simulator
          </p>
        </div>

        <div className="flex-1">
          <FlowCanvas />
        </div>
      </div>
    </div>
  );
}

export default Workspace;