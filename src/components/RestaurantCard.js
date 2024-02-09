import { CDN_URL } from "../utils/constants";

// restaurant cards component

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
  } = resData?.info;

  return (
    <div className="p-4 m-4 w-[300px]  bg-gray-100 flex flex-col items-center rounded-lg text-center hover:bg-gray-300">
      <div className="w-[250px] h-[300px]">
        <img
          className="rounded-lg object-fill"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant img"
        />
      </div>

      <h2 className="font-bold text-2xl my-2">{name}</h2>
      <p className="text-xs my-1">{cuisines.join(", ")}</p>
      <h5 className="bg-green-500 px-7 py-2 rounded-lg  mt-2">
        {avgRatingString} stars
      </h5>
      <h5 className="my-2 underline">{totalRatingsString} reviews</h5>

      <button class="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
        Add to Cart
      </button>
    </div>
  );
};

export default RestaurantCard;
