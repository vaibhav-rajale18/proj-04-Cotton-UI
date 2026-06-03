import ReactFlow, {
  Controls,
  MiniMap,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import RequestNode from "../nodes/RequestNode";

const nodeTypes = {
  request: RequestNode,
};

const FlowCanvas = () => {
  const nodes = [
    {
      id: "1",
      type: "request",
      position: { x: 100, y: 150 },
      data: {
        label: "POST /login",
      },
    },
    {
      id: "2",
      type: "request",
      position: { x: 450, y: 150 },
      data: {
        label: "GET /users",
      },
    },
    {
      id: "3",
      type: "request",
      position: { x: 800, y: 150 },
      data: {
        label: "POST /register",
      },
    },
  ];

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap
          pannable
          zoomable
          className="bg-zinc-900"
        />

        <Controls />

        <Background
          gap={24}
          size={1}
        />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;