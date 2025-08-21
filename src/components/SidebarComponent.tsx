import { NavLink, useLocation } from "react-router";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  IoChevronBack,
  IoChevronForward,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import SearchInput from "./searchInput";

type SidebarProps = {
  collapsed: boolean;
  toggled: boolean;
  handleToggleSidebar: () => void;
  handleCollapsedChange: () => void;
};

const SidebarComponent: React.FC<SidebarProps> = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
  toggled,
}) => {
  const location = useLocation();

  return (
    <Sidebar
      collapsed={collapsed}
      onToggle={handleToggleSidebar}
      breakPoint="md"
      toggled={toggled}
      backgroundColor="white"
      className="h-full"
      onBackdropClick={handleToggleSidebar}
      width="270px"
    >
      {/* Header */}
      <div className="border-b-2 py-3 pb-3">
        <Menu>
          {collapsed ? (
            <MenuItem
              icon={<IoChevronForward size={20} />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<IoChevronBack size={20} />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          )}
        </Menu>
      </div>
      {/* Content */}
      <div className="sidebar-content">
        <Menu className="font-Inter font-normal text-base">
          <MenuItem>
            <SearchInput />
          </MenuItem>
          <MenuItem
            icon={<IoHomeOutline size={20} />}
            suffix={<IoChevronForward size={20} />}
            component={<NavLink to="/home" />}
            className={location.pathname === "/home" ? "text-[#00FFA3]" : ""}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<IoPersonOutline size={20} />}
            suffix={<IoChevronForward size={20} />}
            component={<NavLink to="/profile" />}
            className={location.pathname === "/profile" ? "text-[#00FFA3]" : ""}
          >
            Profile
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
