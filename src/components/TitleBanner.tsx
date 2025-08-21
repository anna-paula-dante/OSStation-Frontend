import { useLocation } from "react-router";
import CustonBreadcrumb from "./CustonBreadcrumb";

export default function TitleBanner() {
  const location = useLocation();
  const pathName = location.pathname;
  const getPageName = (pathName: string) => {
    switch (pathName) {
      case "/home/update":
        return "UPLOAD";
      case "/home/orders":
        return "Pedidos";
      case "/profile":
        return "Perfil";
      default:
        return pathName;
    }
  };

  const currentPageName = getPageName(pathName);

  return (
    <div className="w-full h-10 flex justify-center items-center gap-3">
      <div className="w-[300px]">
        <CustonBreadcrumb
          pathName={pathName}
          currentPageName={currentPageName}
        />
      </div>
      <div className="h-[5px] w-full bg-[#223041]"></div>
    </div>
  );
}
