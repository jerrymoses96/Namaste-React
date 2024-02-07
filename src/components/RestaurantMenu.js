import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/UseRestaurantMenu.JS";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);

  console.log(resinfo);

  if (resinfo === null) return <Shimmer />;

  const { name } = resinfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => (
          <li className="menu-items" key={items?.card?.info?.id}>
            <span className="menu-np">{items?.card?.info?.name}</span>{" "}
            {items?.card?.info?.price / 100 ||
              items?.card?.info?.defaultPrice / 100}{" "}
            Rs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
