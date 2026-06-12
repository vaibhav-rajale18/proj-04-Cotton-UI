import BaseNode from "./BaseNode";

function DatabaseNode({
  data,
  selected,
}) {
  return (
    <BaseNode
      title="Database"
      label={data.label}
      borderColor="border-red-500"
      titleColor="text-red-400"
      selected={selected}
    />
  );
}

export default DatabaseNode;