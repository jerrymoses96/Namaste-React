import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/UseRestaurantMenu.JS";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(0);

  if (resinfo === null) return <Shimmer />;

  const { name } = resinfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (items) => {
        return (
          items?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(category);

  return (
    <div className="flex justify-center  ">
      <div className="menu flex flex-col border-2 w-[700px] bg-gradient-to-r from-orange-500 to-pink-300  ">
        <h1 className="text-3xl font-bold text-center my-5">{name}</h1>
        {category.map((category, index) => {
          return (
            <RestaurantCategory
              key={index}
              data={category?.card?.card}
              showitems={index === showIndex && true}
              setshowIndex = {()=>setshowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
