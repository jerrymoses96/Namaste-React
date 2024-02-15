import RestaurantCard from "./RestaurantCard";

import { useContext, useEffect, useState } from "react";

import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import HangmanGame from "./GameComponent";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [ListOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  // console.log(ListOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const {setLoggedUsers,LoggedUser} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) return <HangmanGame />;

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body font-mono">
      <div className="search p-7 flex justify-center gap-3 ">
        <input
          type="search"
          className="border border-solid border-black px-[100px] py-3"
          placeholder="Search for food or Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
          onClick={() => {
            // write filter logic
            filteredRestaurants = ListOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="ml-[500px]">
        <button
          className="px-10 py-3 bg-green-600 rounded-lg"
          onClick={() => {
            filteredlist = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            setFilteredRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="my-5">
          <label>UserName</label>
          <input className="border border-black" value={LoggedUser} onChange={(e)=>setLoggedUsers(e.target.value)} />
        </div>
      </div>
      <div className=" flex flex-wrap justify-center ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="res-box"
              key={restaurant.info.id}
              to={"/Restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
