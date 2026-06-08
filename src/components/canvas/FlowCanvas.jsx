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

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
  },

  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
  },

  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
  },

  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
  },

  {
    id: "e6-7",
    source: "6",
    target: "7",
    animated: true,
  },
];
const defaultEdgeOptions = {
  animated: true,
  style: {
    stroke: "#60a5fa",
    strokeWidth: 3,
  },
};

  return (
    <div className="h-full w-full">
<ReactFlow
  nodes={nodes}
  edges={edges}
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