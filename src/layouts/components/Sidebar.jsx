import React from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Home,
  Calendar,
  BookMarked,
  UserCheck,
  TrendingUp,
} from "lucide-react";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/" },
    { id: "books", label: "Koleksi Buku", icon: BookOpen, path: "/books" },
    { id: "members", label: "Anggota", icon: Users, path: "/members" },
    {
      id: "borrowing",
      label: "Peminjaman",
      icon: BookMarked,
      path: "/borrowing",
    },
    { id: "returns", label: "Pengembalian", icon: UserCheck, path: "/returns" },
    { id: "reports", label: "Laporan", icon: BarChart3, path: "/reports" },
    { id: "calendar", label: "Kalender", icon: Calendar, path: "/calendar" },
    { id: "settings", label: "Pengaturan", icon: Settings, path: "/settings" },
  ];

  return (
    <aside
      className={`bg-slate-900 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } min-h-screen relative flex-shrink-0 overflow-hidden`} /* Tambahkan overflow-hidden */
    >
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen size={24} className="text-white" />
          </div>
          {isOpen && (
            <div>
              <h2 className="text-lg font-semibold">Perpustakaan</h2>
              <p className="text-xs text-slate-400">Sistem Manajemen</p>
            </div>
          )}
        </div>
      </div>

      <nav className="mt-8">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                  title={!isOpen ? item.label : ""}
                >
                  <Icon size={20} />
                  {isOpen && <span className="text-sm">{item.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-slate-800 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <TrendingUp size={16} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Status Sistem</p>
                <p className="text-sm font-medium text-green-400">Online</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
