import { Handle, Position } from "reactflow";

const BaseNode = ({
  title,
  label,
  borderColor,
  titleColor,
  selected,
}) => {
  return (
    <div
      className={`
        min-w-[240px]
        rounded-2xl
        border-2
        ${
          selected
            ? "border-blue-500 ring-4 ring-blue-500/20 shadow-2xl shadow-blue-500/20"
            : borderColor
        }
        bg-zinc-900
        p-5
        shadow-xl
        transition-all
        duration-200
        hover:-translate-y-1
      `}
    >
      <Handle
        type="target"
        position={Position.Left}
      />

      <div
        className={`
          text-xs
          font-bold
          uppercase
          tracking-widest
          ${
            selected
              ? "text-blue-400"
              : titleColor
          }
        `}
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