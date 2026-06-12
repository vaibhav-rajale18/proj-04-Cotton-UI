import ReactFlow, {
  Controls,
  MiniMap,
  Background,
  applyNodeChanges,
  addEdge,
  applyEdgeChanges,
} from "reactflow";

import "reactflow/dist/style.css";

import RequestNode from "../nodes/RequestNode";
import MiddlewareNode from "../nodes/MiddlewareNode";
import RouteNode from "../nodes/RouteNode";
import ControllerNode from "../nodes/ControllerNode";
import ServiceNode from "../nodes/ServiceNode";
import DatabaseNode from "../nodes/DatabaseNode";
import ResponseNode from "../nodes/ResponseNode";

const nodeTypes = {
  request: RequestNode,
  middleware: MiddlewareNode,
  route: RouteNode,
  controller: ControllerNode,
  service: ServiceNode,
  database: DatabaseNode,
  response: ResponseNode,
};

const defaultEdgeOptions = {
  animated: true,

  style: {
    stroke: "#60a5fa",
    strokeWidth: 3,
  },
};

const FlowCanvas = ({
  nodes,
  setNodes,
  edges,
  setEdges,
}) => {
  const onNodesChange = (changes) => {
    setNodes((nds) =>
      applyNodeChanges(changes, nds)
    );
  };

  const onEdgesChange = (changes) => {
    setEdges((eds) =>
      applyEdgeChanges(changes, eds)
    );
  };

  const onConnect = (connection) => {
    setEdges((eds) =>
      addEdge(
        {
          ...connection,
          animated: true,
        },
        eds
      )
    );
  };

  if (nodes.length === 0) {
    return (
      <div className="flex h-full items-center justify-center bg-zinc-950">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-10 py-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white">
            Start Building Your Backend Flow
          </h2>

          <p className="mt-3 max-w-sm text-sm text-zinc-400">
            Use the node palette to add backend
            components and design your request
            lifecycle visually.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={
          defaultEdgeOptions
        }
        deleteKeyCode={[
          "Backspace",
          "Delete",
        ]}
        fitView
        fitViewOptions={{
          padding: 0.3,
        }}
      >
        <MiniMap
          pannable
          zoomable
          className="bg-zinc-900"
        />

        <Controls />

        <Background
          gap={20}
          size={1}
          color="#27272a"
        />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;