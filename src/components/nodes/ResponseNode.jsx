import BaseNode from "./BaseNode";

function ResponseNode({ data }) {
  return (
    <BaseNode
      title="Response"
      label={data.label}
      borderColor="border-emerald-500"
      titleColor="text-emerald-400"
    />
  );
}

export default ResponseNode;