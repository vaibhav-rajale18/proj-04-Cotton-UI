import BaseNode from "./BaseNode";

function ControllerNode({ data }) {
  return (
    <BaseNode
      title="Controller"
      label={data.label}
      borderColor="border-purple-500"
      titleColor="text-purple-400"
    />
  );
}

export default ControllerNode;