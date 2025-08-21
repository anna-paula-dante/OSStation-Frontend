import api from "./api";
import type { UserWithOrders, OrderFilters } from "../types/OrderTypes";

export const uploadFileService = async (file: File, endpoint: string) => {
  const formData = new FormData();

  formData.append("file", file);

  try {
    const response = await api.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao enviar o arquivo:", error);
    throw error;
  }
};

export const fetchOrdersService = async (
  filters: OrderFilters = {}
): Promise<UserWithOrders[]> => {
  const params = {
    order_id: filters.orderId,
    start_date: filters.startDate,
    end_date: filters.endDate,
  };

  try {
    const response = await api.get("/orders", { params });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os pedidos:", error);
    throw error;
  }
};
