import BaseNode from "./BaseNode";

function RouteNode({ data }) {
  return (
    <BaseNode
      title="Route"
      label={data.label}
      borderColor="border-green-500"
      titleColor="text-green-400"
    />
  );
}

export default RouteNode;