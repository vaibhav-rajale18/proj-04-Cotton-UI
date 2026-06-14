function InspectorPanel({
  selectedNode,
  onLabelChange,
}) {
  if (!selectedNode) {
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-3xl">
            ⚙️
          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            No Component Selected
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Select a backend component from
            the canvas to view and edit its
            configuration.
          </p>
        </div>
      </div>
    );
  }

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

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/20 text-xl">
              🎯
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Node Details
              </h3>

              <p className="text-sm text-zinc-400">
                Information about the selected
                component.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-zinc-800/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Node Type
              </p>

              <p className="mt-1 font-medium capitalize text-white">
                {selectedNode.type}
              </p>
            </div>

            <div className="rounded-xl bg-zinc-800/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Node ID
              </p>

              <p className="mt-1 font-medium text-white">
                {selectedNode.id}
              </p>
            </div>

            <div className="rounded-xl bg-zinc-800/50 p-4">
              <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Label
              </label>

              <input
                type="text"
                value={
                  selectedNode.data?.label ||
                  ""
                }
                onChange={(e) =>
                  onLabelChange(
                    e.target.value
                  )
                }
                className="mt-3 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white outline-none transition focus:border-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspectorPanel;