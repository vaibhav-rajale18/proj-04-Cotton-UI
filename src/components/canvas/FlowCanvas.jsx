import ReactFlow, {
  Controls,
  MiniMap,
  Background,
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

const FlowCanvas = () => {
  const nodes = [
  {
    id: "1",
    type: "request",
    position: { x: 100, y: 100 },
    data: {
      label: "POST /login",
    },
  },

  {
    id: "2",
    type: "middleware",
    position: { x: 400, y: 100 },
    data: {
      label: "Auth Check",
    },
  },

  {
    id: "3",
    type: "route",
    position: { x: 700, y: 100 },
    data: {
      label: "POST /login",
    },
  },

  {
    id: "4",
    type: "controller",
    position: { x: 1000, y: 100 },
    data: {
      label: "Login Controller",
    },
  },

  {
    id: "5",
    type: "service",
    position: { x: 1300, y: 100 },
    data: {
      label: "Auth Service",
    },
  },

  {
    id: "6",
    type: "database",
    position: { x: 1600, y: 100 },
    data: {
      label: "Users Collection",
    },
  },

  {
    id: "7",
    type: "response",
    position: { x: 1900, y: 100 },
    data: {
      label: "200 OK",
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