import React from "react";
import { X, Menu } from "lucide-react";
import IconButton from "./IconButton";

function SidebarToggle({ isSidebarOpen, toggleSidebar }) {
  return (
    <IconButton
      onClick={toggleSidebar}
      className={""}
      aria-label={isSidebarOpen ? "Tutup Sidebar" : "Buka Sidebar"}
      icon={isSidebarOpen ? X : Menu}
    />
  );
}

export default SidebarToggle;
