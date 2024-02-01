import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  let [resinfo, setresinfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresinfo(json.data);
  };

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, imageId } =
    resinfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items) => (
          <li className="menu-items" key={items?.card?.info?.id}>
            <span className="menu-name">{items?.card?.info?.name}</span> {" "}
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
