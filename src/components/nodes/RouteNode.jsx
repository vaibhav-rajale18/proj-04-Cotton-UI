import BaseNode from "./BaseNode";

function RouteNode({
  data,
  selected,
}) {
  return (
    <BaseNode
      title="Route"
      label={data.label}
      borderColor="border-green-500"
      titleColor="text-green-400"
      selected={selected}
    />
  );
}

export default RouteNode;