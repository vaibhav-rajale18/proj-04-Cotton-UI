import BaseNode from "./BaseNode";

function DatabaseNode({ data }) {
  return (
    <BaseNode
      title="Database"
      label={data.label}
      borderColor="border-red-500"
      titleColor="text-red-400"
    />
  );
}

export default DatabaseNode;