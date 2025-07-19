import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "@/layouts/components/Header";
import Sidebar from "@/layouts/components/Sidebar";
import Footer from "@/layouts/components/Footer";
import Main from "@/layouts/Main";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
