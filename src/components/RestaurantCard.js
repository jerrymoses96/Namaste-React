import { CDN_URL } from "../utils/constants";

// restaurant cards component

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines } = resData?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="restaurant img" />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h5>4.4 stars</h5>
      <h5>38 minutes</h5>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default RestaurantCard;
