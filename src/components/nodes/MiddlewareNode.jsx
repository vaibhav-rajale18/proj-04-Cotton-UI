import BaseNode from "./BaseNode";

function MiddlewareNode({ data }) {
  return (
    <BaseNode
      title="Middleware"
      label={data.label}
      borderColor="border-yellow-500"
      titleColor="text-yellow-400"
    />
  );
}

export default MiddlewareNode;