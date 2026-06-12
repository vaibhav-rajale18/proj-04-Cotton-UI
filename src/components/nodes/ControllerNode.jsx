import BaseNode from "./BaseNode";

function ControllerNode({
  data,
  selected,
}) {
  return (
    <BaseNode
      title="Controller"
      label={data.label}
      borderColor="border-purple-500"
      titleColor="text-purple-400"
      selected={selected}
    />
  );
}

export default ControllerNode;