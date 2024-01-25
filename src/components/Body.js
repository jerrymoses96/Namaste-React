import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./shimmer";

const Body = () => {
  let [ListOfRestaurants, setListOfRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

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
  };

  // conditional rendering

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="search-box"
          placeholder="Search for food or Restaurants"
          value={searchText}
          onChange={(e)=> {
            setSearchText(e.target.value)
          }
          }
        />
        <button className="search-button" onClick={()=>{
          console.log(searchText);
        }} >Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredlist = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            setListOfRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {ListOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
