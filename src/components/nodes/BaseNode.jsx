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
  ? "border-pink-500 ring-4 ring-pink-500/30 selected-node"
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
  ? "text-pink-400"
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