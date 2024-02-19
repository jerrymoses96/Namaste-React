import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";



const CategoryBody = ({ items }) => {

  const dispatch = useDispatch();
const handleItemsCart = (item) => {
  // dispatch an action
  dispatch(addItem(item));
};
  // Check if items is undefined or null
  if (!items) {
    return <div>No items to display</div>;
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="flex justify-between items-center border-b-2 border-orange-100 gap-12">
            <div className=" p-5 w-9/12">
              <div key={item?.card?.info?.id}>
                <span>{item?.card?.info?.name}</span>
                <span> - ₹{item?.card?.info?.price / 100} </span>
              </div>
              <div>
                <span className="font-light text-xs">
                  {item?.card?.info?.description}
                </span>
              </div>
            </div>
            <div className="w-3/12 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-24 h-24 shadow-lg"
              />
              <button
                onClick={()=>handleItemsCart(item)}
                className="bg-black text-white absolute bottom-0 hover:bg-slate-300 hover:text-black z-20 rounded-md p-1 "
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBody;
