import FlowCanvas from "../components/canvas/FlowCanvas";
import NodePalette from "../components/workspace/NodePalette";

function Workspace() {
  return (
    <div className="flex h-[calc(100vh-180px)] overflow-hidden rounded-xl border border-zinc-800">
      <NodePalette />

      <div className="flex-1 bg-zinc-950">
        <FlowCanvas />
      </div>
    </div>
  );
}

export default Workspace;