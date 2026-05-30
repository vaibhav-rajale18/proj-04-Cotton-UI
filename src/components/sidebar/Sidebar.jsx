import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkStyle =
    "block px-4 py-3 rounded-lg transition-colors";

  return (
    <div className="h-screen p-4">
      <h1 className="mb-8 text-xl font-bold">
        Cotton UI
      </h1>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-900"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/workspace"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-900"
            }`
          }
        >
          Workspace
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-900"
            }`
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;