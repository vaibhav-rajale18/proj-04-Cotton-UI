import { useState } from "react";

import ReactFlow, {
  Controls,
  MiniMap,
  Background,
  applyNodeChanges,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

import {
  initialNodes,
  initialEdges,
} from "../../data/initialFlow";

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

const FlowCanvas = () => {
  const [nodes, setNodes] = useState(initialNodes);

  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
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

  const handleAddRequestNode = () => {
    const newNode = {
      id: `${Date.now()}`,
      type: "request",

      position: {
        x: Math.random() * 500 + 100,
        y: Math.random() * 400 + 100,
      },

      data: {
        label: `Request ${nodes.length + 1}`,
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="relative h-full w-full">
      <button
        onClick={handleAddRequestNode}
        className="
          absolute
          top-4
          right-4
          z-10
          rounded-lg
          bg-blue-600
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          transition-colors
          hover:bg-blue-500
        "
      >
        Add Request Node
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
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