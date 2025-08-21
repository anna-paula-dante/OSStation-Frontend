import { Link } from "react-router";
import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CustonBreadcrumbProps {
  currentPageName?: string;
  pathName?: string;
}
export const CustonBreadcrumb: React.FC<CustonBreadcrumbProps> = ({
  currentPageName,
  pathName = "/",
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            asChild
            className="text-white uppercase font-normal text-xl"
          >
            <Link to="/home">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon size={20} className="text-white" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            asChild
            className="text-[#00FFA3] font-normal text-xl uppercase"
          >
            <Link to={pathName}>{currentPageName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustonBreadcrumb;
