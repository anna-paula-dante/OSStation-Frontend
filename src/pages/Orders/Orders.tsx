import SearchOrder from "@/components/SearchOrder";
import { useState } from "react";
import { toast } from "sonner";
import type { UserWithOrders } from "@/types/OrderTypes";
import ShowOrder from "@/components/ShowOrder";

export default function Orders() {
  const [orders, setOrders] = useState<UserWithOrders[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSearchStart = () => {
    setIsLoading(true);
    setError(null);
    setOrders([]);
  };

  const handleSearchSuccess = (data: UserWithOrders[]) => {
    setOrders(data);
    setIsLoading(false);
  };

  const handleSearchError = (errorMessage: string) => {
    toast(errorMessage);
    setError(errorMessage);
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col px-11 pt-8 bg-[#2B3C51]">
      <SearchOrder
        onSearchStart={handleSearchStart}
        onSearchSuccess={handleSearchSuccess}
        onSearchError={handleSearchError}
      />
      <div className="mt-8">
        {isLoading && (
          <p className="text-center text-gray-400">Carregando...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && (
          <ShowOrder data={orders} /> // Você passaria os dados para um componente de resultados aqui
        )}
      </div>
    </div>
  );
}
