function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Cotton UI Dashboard
      </h1>

      <p className="mt-3 text-zinc-400">
        Frontend-focused visual backend flow simulator.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <h3 className="font-semibold">Workspace</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Build and simulate backend request flows.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <h3 className="font-semibold">Simulation</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Visualize request execution step by step.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <h3 className="font-semibold">Projects</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Save and manage flow configurations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;