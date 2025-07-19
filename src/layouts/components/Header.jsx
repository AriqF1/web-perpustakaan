import React from "react";
import { Bell, User } from "lucide-react";
import SearchInput from "@/components/SearchInput";
import IconButton from "@/components/IconButton";
import SidebarToggle from "@/components/SidebarToggle";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <SidebarToggle
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <h1 className="text-xl font-semibold text-gray-800"></h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <SearchInput placeholder={"Cari buku, cari anggota..."} />
        </div>
        <IconButton icon={Bell} />
        <IconButton icon={User} children={"Admin"} />
      </div>
    </header>
  );
};

export default Header;
