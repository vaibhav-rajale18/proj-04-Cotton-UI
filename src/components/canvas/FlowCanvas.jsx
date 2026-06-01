import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const FlowCanvas = () => {
  const nodes = [
    {
      id: "1",
      position: { x: 100, y: 100 },
      data: { label: "Hello Cotton UI" },
      type: "default",
    },
  ];

  return (
    <div className="h-full w-full">
      <ReactFlow nodes={nodes} fitView />
    </div>
  );
};

export default FlowCanvas;