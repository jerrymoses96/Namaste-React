import { GoArrowDown } from "react-icons/go";
import CategoryBody from "./CategoryBody";
import { useState } from "react";

const RestaurantCategory = ({ data, showitems, setshowIndex }) => {
  console.log(data);

  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div>
      {/* header */}
      <div
        className="flex h-16 justify-between border-b-stone-800 shadow-lg items-center p-5 cursor-pointer text-xl font-bold  "
        onClick={handleClick}
      >
        <span>
          {data.title}({data.itemCards.length})
        </span>
        <GoArrowDown />
      </div>

      {/* body */}

      {showitems && <CategoryBody items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
