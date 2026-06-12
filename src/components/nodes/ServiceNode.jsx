import BaseNode from "./BaseNode";

function ServiceNode({
  data,
  selected,
}) {
  return (
    <BaseNode
      title="Service"
      label={data.label}
      borderColor="border-orange-500"
      titleColor="text-orange-400"
      selected={selected}
    />
  );
}

export default ServiceNode;