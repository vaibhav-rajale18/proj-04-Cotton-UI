const nodeTypes = [
  "Request",
  "Middleware",
  "Route",
  "Controller",
  "Service",
  "Database",
  "Response",
];

function NodePalette() {
  return (
    <div className="w-64 border-r border-zinc-800 bg-zinc-900 p-4">
      <h2 className="text-lg font-semibold text-white">
        Node Palette
      </h2>

      <p className="mt-1 mb-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
        Backend Components
      </p>

      <div className="space-y-3">
        {nodeTypes.map((node) => (
          <button
            key={node}
            className="
              w-full
              rounded-xl
              border
              border-zinc-700
              bg-zinc-800
              px-4
              py-3
              text-left
              text-sm
              font-medium
              text-zinc-200
              transition-all
              duration-200
              hover:translate-x-1
              hover:border-blue-500
              hover:bg-zinc-700
              hover:text-white
              active:scale-[0.98]
            "
          >
            {node}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NodePalette;