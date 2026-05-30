import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
  <aside className="w-64 border-r border-zinc-800 bg-zinc-950">
    <Sidebar />
  </aside>

  <div className="flex-1 flex flex-col">
    <Navbar />

    <main className="flex-1 p-6">
      <Outlet />
    </main>
  </div>
</div>
  );
}

export default MainLayout;