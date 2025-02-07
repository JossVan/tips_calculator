import { Dispatch } from "react";
import { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

function MenuItems({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 cursor-pointer hover:bg-teal-200 w-full p-3 flex justify-between rounded-2xl "
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}

export default MenuItems;
