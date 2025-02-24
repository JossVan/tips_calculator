import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState = {
  order: [],
  tip: 0,
};

export const orderReducer = (state: OrderState, action: OrderActions) => {
  if (action.type === "add-item") {
    const itemExist = state.order.find(
      (orderItem: OrderItem) => orderItem.id === action.payload.item.id
    );
    let order: OrderItem[] = [];
    if (itemExist) {
      order = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          : orderItem
      );
      return {
        ...state,
        order,
      };
    } else {
      const newItem: OrderItem = {
        ...action.payload.item,
        quantity: 1,
      };

      order = [...state.order, newItem];
      return {
        ...state,
        order,
      };
    }
  }
  if (action.type === "remove-item") {
    const updatedOrder = state.order.filter(
      (orderItem) => orderItem.id !== action.payload.id
    );
    return {
      ...state,
      order: updatedOrder,
    };
  }
  if (action.type === "place-order") {
    return {
      order: [],
      tip: 0,
    };
  }
  if (action.type === "add-tip") {
    return {
      ...state,
      tip: action.payload.value,
    };
  }
  return state;
};
