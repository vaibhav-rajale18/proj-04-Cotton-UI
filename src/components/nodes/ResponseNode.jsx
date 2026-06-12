import BaseNode from "./BaseNode";

function ResponseNode({
  data,
  selected,
}) {
  return (
    <BaseNode
      title="Response"
      label={data.label}
      borderColor="border-emerald-500"
      titleColor="text-emerald-400"
      selected={selected}
    />
  );
}

export default ResponseNode;