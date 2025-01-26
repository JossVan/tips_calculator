import { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

function MenuItems({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 cursor-pointer hover:bg-teal-200 w-full p-3 flex justify-between rounded-2xl "
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}

export default MenuItems;
