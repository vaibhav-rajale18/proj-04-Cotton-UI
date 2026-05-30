function Navbar() {
  return (
    <header className="h-16 border-b border-zinc-800 px-6 flex items-center justify-between bg-zinc-950">
      <div>
        <h2 className="text-lg font-semibold">
          Cotton UI
        </h2>
      </div>

      <div className="text-sm text-zinc-400">
        Frontend Flow Simulator
      </div>
    </header>
  );
}

export default Navbar;