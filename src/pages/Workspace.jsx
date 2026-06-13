import { useState } from "react";

import FlowCanvas from "../components/canvas/FlowCanvas";
import NodePalette from "../components/workspace/NodePalette";
import InspectorPanel from "../components/inspector/InspectorPanel";

import {
  initialNodes,
  initialEdges,
} from "../data/initialFlow";

import createNode from "../utils/createNode";

function Workspace() {
  const [nodes, setNodes] = useState(initialNodes);

  const [edges, setEdges] = useState(initialEdges);

  const handleAddNode = (type) => {
    const nodeCount =
      nodes.filter((node) => node.type === type)
        .length + 1;

    const newNode = createNode(
      type,
      nodeCount
    );

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="flex h-[calc(100vh-180px)] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
      <NodePalette
        onAddNode={handleAddNode}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-zinc-800 px-5 py-4">
          <h1 className="text-lg font-bold text-white">
            Cotton Flow Editor
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Visual Backend Request Simulator
          </p>
        </div>

        <div className="flex-1">
          <FlowCanvas
            nodes={nodes}
            setNodes={setNodes}
            edges={edges}
            setEdges={setEdges}
          />
        </div>
      </div>

      <InspectorPanel />
    </div>
  );
}

export default Workspace;