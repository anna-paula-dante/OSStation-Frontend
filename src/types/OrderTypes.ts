export interface Product {
  product_id: number;
  value: string;
}

export interface Order {
  order_id: number;
  total: string;
  date: string;
  products: Product[];
}

export interface UserWithOrders {
  user_id: number;
  name: string;
  orders: Order[];
}

export interface OrderFilters {
  orderId?: string;
  startDate?: string;
  endDate?: string;
}
