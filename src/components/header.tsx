import { IoLogoReact, IoMenu } from "react-icons/io5";
import Title from "./Title";

interface HeaderProps {
  fs: () => void;
}

export default function Header({ fs }: HeaderProps) {
  return (
    <header className="h-[80px] w-full flex items-center justify-between px-6 bg-[#223041]">
      <div className="flex gap-6">
        <button className="md:hidden" onClick={() => fs()}>
          <IoMenu size={33} className="text-[#00FFA3]" />
        </button>
        <Title />
      </div>
      <div className="bg-[#15202E] rounded-full p-3.5 text-white">
        <IoLogoReact size={25} />
      </div>
    </header>
  );
}
