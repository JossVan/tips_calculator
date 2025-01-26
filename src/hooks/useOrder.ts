import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const addItem = (item: MenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);

    if (existingItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? {
              ...existingItem,
              quantity: (existingItem.quantity += 1),
            }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const updatedOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(updatedOrder);
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
