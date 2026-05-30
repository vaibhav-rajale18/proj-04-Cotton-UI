import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b border-zinc-800 px-6 flex items-center justify-between bg-zinc-950">
      <div>
        <h2 className="text-lg font-semibold">
          Cotton UI
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-400">
          Frontend Flow Simulator
        </span>

        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded-lg border border-zinc-700 text-sm hover:bg-zinc-800 transition-colors"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;