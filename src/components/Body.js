import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="search" placeholder="Search for food or Restaurents" />
          <button className="search-button">Search</button>
        </div>
        <div className="restaurant-container">
          {
            resList.map(restaurant=>{
              return(
                <RestaurantCard key={restaurant.info.id} resData ={restaurant}/>
              )
              
  
            })
  
  
          }
        </div>
      </div>
    );
  };

  export default Body