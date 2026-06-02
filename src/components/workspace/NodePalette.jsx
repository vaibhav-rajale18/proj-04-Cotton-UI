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
      <h2 className="mb-4 text-lg font-semibold text-white">
        Node Palette
      </h2>

      <div className="space-y-3">
        {nodeTypes.map((node) => (
          <button
            key={node}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-left text-sm text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-700"
          >
            {node}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NodePalette;