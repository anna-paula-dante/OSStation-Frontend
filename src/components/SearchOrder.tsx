import { IoSearchOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { fetchOrdersService } from "@/services/fileUploadService";
import type { UserWithOrders } from "@/types/OrderTypes";

type SearchOrderProps = {
  onSearchStart: () => void;
  onSearchSuccess: (data: UserWithOrders[]) => void;
  onSearchError: (message: string) => void;
};

export default function SearchOrder({
  onSearchStart,
  onSearchSuccess,
  onSearchError,
}: SearchOrderProps) {
  const [orderId, setOrderId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleOrderIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setOrderId(numericValue);
  };

  const handleSearchClick = async () => {
    onSearchStart();
    try {
      const filters = { orderId, startDate, endDate };
      const data = await fetchOrdersService(filters);
      onSearchSuccess(data);
    } catch (error) {
      console.log(error);
      onSearchError("Falha ao buscar os pedidos.");
    }
  };

  return (
    <div className="sm:flex-col py-5 h-[250px] md:h-[101px] md:py-0 max-w-[681px] md:flex md:flex-row md:items-center gap-4 px-5 bg-[#223041] rounded-xl">
      <div className="flex flex-col gap-1 justify-center">
        <Label
          htmlFor="pedido"
          className="text-base font-normal text-[#00FFA3]"
        >
          Periodo
        </Label>
        <div className="flex gap-2">
          <Input
            id="pedido"
            type="date"
            placeholder="Inicio"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            className="bg-[#1D2938] text-white placeholder-[#3D5470]"
          />
          <Input
            id="pedido"
            type="date"
            placeholder="1234567"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-[#1D2938] text-white placeholder-[#3D5470]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <Label
          htmlFor="pedido"
          className="text-base font-normal text-[#00FFA3]"
        >
          ID do Pedido
        </Label>
        <Input
          id="pedido"
          type="number"
          value={orderId}
          onChange={handleOrderIdChange}
          placeholder="1234567"
          className="bg-[#1D2938] text-white placeholder-[#3D5470]"
        />
      </div>
      <div>
        <button
          onClick={handleSearchClick}
          className="flex px-5 bg-[#00FFa3] py-5 text-base font-normal rounded-md"
        >
          <IoSearchOutline size={25} />
          BUSCAR
        </button>
      </div>
    </div>
  );
}
