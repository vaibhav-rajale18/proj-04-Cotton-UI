import { Handle, Position } from "reactflow";

const BaseNode = ({
  title,
  label,
  borderColor,
  titleColor,
}) => {
  return (
    <div
      className={`min-w-[220px] rounded-xl border-2 ${borderColor} bg-zinc-900 p-4 shadow-lg`}
    >
      <Handle
        type="target"
        position={Position.Left}
      />

      <div
        className={`text-xs font-bold uppercase tracking-widest ${titleColor}`}
      >
        {title}
      </div>

      <div className="mt-3 text-sm font-semibold text-white">
        {label}
      </div>

      <Handle
        type="source"
        position={Position.Right}
      />
    </div>
  );
};

export default BaseNode;