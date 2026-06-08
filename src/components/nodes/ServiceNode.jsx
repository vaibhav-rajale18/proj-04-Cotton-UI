import BaseNode from "./BaseNode";

function ServiceNode({ data }) {
  return (
    <BaseNode
      title="Service"
      label={data.label}
      borderColor="border-orange-500"
      titleColor="text-orange-400"
    />
  );
}

export default ServiceNode;