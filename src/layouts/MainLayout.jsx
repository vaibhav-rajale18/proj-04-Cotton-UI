import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useTheme } from "../context/ThemeContext";

function MainLayout() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen flex transition-colors duration-300"
      style={{
        backgroundColor:
          theme === "dark" ? "#09090b" : "#ffffff",
        color:
          theme === "dark" ? "#ffffff" : "#18181b",
      }}
    >
      <aside
        className="w-64 border-r"
        style={{
          borderColor:
            theme === "dark" ? "#27272a" : "#d4d4d8",
        }}
      >
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