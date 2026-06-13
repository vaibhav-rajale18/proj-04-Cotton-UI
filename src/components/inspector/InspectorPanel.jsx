function InspectorPanel({
  selectedNode,
}) {
  return (
    <div className="w-80 border-l border-zinc-800 bg-zinc-950 p-5">
      <div>
        <h2 className="text-lg font-bold text-white">
          Inspector
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Configure selected backend
          components.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800 text-2xl">
          ⚙️
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">
          Inspector Coming Soon
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Select a backend component to
          view and edit its configuration.
        </p>

        {selectedNode && (
          <p className="mt-4 text-xs text-pink-400">
            Selected:{" "}
            {selectedNode.data?.label}
          </p>
        )}
      </div>
    </div>
  );
}

export default InspectorPanel;