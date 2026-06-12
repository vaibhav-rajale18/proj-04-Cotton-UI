import BaseNode from "./BaseNode";

function MiddlewareNode({
  data,
  selected,
}) {
  return (
    <BaseNode
      title="Middleware"
      label={data.label}
      borderColor="border-yellow-500"
      titleColor="text-yellow-400"
      selected={selected}
    />
  );
}

export default MiddlewareNode;