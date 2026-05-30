import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        <aside className="w-64 border-r border-zinc-800">
          <Sidebar />
          <aside className="w-64 border-r border-zinc-800 bg-zinc-950"></aside>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;