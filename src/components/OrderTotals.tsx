import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderState } from "../reducers/order-reducer";

type OrderTotalsProps = {
  state: OrderState;
  placeOrder: () => void;
};

export default function OrderTotals({
  state,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(() => {
    return state.order.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [state.order]);

  const tipAmount = useMemo(() => {
    return subtotalAmount * state.tip;
  }, [state.tip, state.order]);

  const totalAmount = useMemo(() => {
    return subtotalAmount + tipAmount;
  }, [state.tip, state.order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y propina:</h2>
        <p>
          Subtotal: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina: {""}{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar: {""} <span className="font-bold">{totalAmount}</span>
        </p>
      </div>
      <button
        className="w-full  bg-black p-3  uppercase text-white font-bold mt-10 enabled:cursor-pointer disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => placeOrder()}
      >
        Guardar Orden
      </button>
    </>
  );
}
