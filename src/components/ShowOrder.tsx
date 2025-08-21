import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { UserWithOrders } from "@/types/OrderTypes";
import { formatCurrency } from "@/utils/formatCurrencyBR";
import { formatDate } from "@/utils/formatDate";

type OrderResultsProps = {
  data: UserWithOrders[];
};

export default function ShowOrder({ data }: OrderResultsProps) {
  if (!data || data.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-400">
        Nenhum resultado para exibir. Realize uma busca.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {data.map((user) =>
        user.orders.map((order) => (
          <div
            key={order.order_id}
            className="bg-[#223041] rounded-md overflow-hidden"
          >
            <div className="flex justify-between items-center pl-2 pr-6 py-3 text-white text-sm">
              <div className="flex gap-4 items-center text-[#00FFA3]">
                <p className=" font-normal text-base">
                  ID DO PEDIDO:{" "}
                  <span className="text-white ">{order.order_id}</span>
                </p>
                <p className="text-">
                  USUÁRIO:{" "}
                  <span className="font-normal uppercase text-white">
                    {user.user_id} - {user.name}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#00FFA3]">
                  DATA:{" "}
                  <span className="font-normal text-white">
                    {" "}
                    {formatDate(order.date)}
                  </span>
                </p>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="bg-[#00FFA3] hover:bg-[#00FFA3]/90">
                  <TableHead className="text-[#1D2938] text-base font-normal">
                    ID DO PRODUTO
                  </TableHead>
                  <TableHead className="text-right text-[#1D2938] text-base font-normal">
                    VALOR
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.products.map((product, index) => (
                  <TableRow
                    key={`${order.order_id}-${product.product_id}-${index}`}
                    className="border-gray-700"
                  >
                    <TableCell className="font-medium text-white">
                      {product.product_id}
                    </TableCell>
                    <TableCell className="text-right text-white">
                      {formatCurrency(product.value)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow className="border-gray-700 hover:bg-transparent">
                  <TableCell
                    colSpan={2}
                    className="text-right font-medium text-xl"
                  >
                    <span className="text-[#00FFA3]">TOTAL: </span>
                    <span className="text-white">
                      {formatCurrency(order.total)}
                    </span>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        ))
      )}
    </div>
  );
}
