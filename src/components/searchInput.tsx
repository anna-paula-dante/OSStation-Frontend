import { Input } from "./ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { Label } from "./ui/label";
export default function SearchInput() {
  return (
    <div className="relative">
      <Label htmlFor="search">
        <IoSearchOutline className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </Label>
      <Input
        type="search"
        id="search"
        className="pl-10 bg-[#F4F4F4]"
        placeholder="BUSCAR"
      />
    </div>
  );
}
