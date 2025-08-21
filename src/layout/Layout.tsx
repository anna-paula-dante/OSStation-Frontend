import Header from "@/components/header";
import SidebarComponent from "@/components/SidebarComponent";
import { Outlet } from "react-router";
import { useState } from "react";
const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  return (
    <div className="h-screen flex">
      <SidebarComponent
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <div className="w-full bg-red-400">
        <Header fs={handleToggleSidebar} />
        <div className="bg-yellow-50 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
