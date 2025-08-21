import SearchOrder from "@/components/SearchOrder";
import { useState } from "react";
import { toast } from "sonner";
import type { UserWithOrders } from "@/types/OrderTypes";

export default function Orders() {
  const [orders, setOrders] = useState<UserWithOrders[]>([]);
  const handleSearchStart = () => {
    setOrders([]);
  };

  const handleSearchSuccess = (data: UserWithOrders[]) => {
    setOrders(data);
  };

  const handleSearchError = (errorMessage: string) => {
    toast(errorMessage);
  };
  console.log(orders);
  return (
    <div>
      <SearchOrder
        onSearchStart={handleSearchStart}
        onSearchSuccess={handleSearchSuccess}
        onSearchError={handleSearchError}
      />
    </div>
  );
}
