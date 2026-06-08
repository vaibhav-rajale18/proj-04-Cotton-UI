import BaseNode from "./BaseNode";

function RequestNode({ data }) {
  return (
    <BaseNode
      title="Request"
      label={data.label}
      borderColor="border-blue-500"
      titleColor="text-blue-400"
    />
  );
}

export default RequestNode;