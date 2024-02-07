import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [ResInfo, setResInfo] = useState(null);
  // fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await data.json();

      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // You can handle the error here, such as setting an error state
      // For simplicity, let's set ResInfo to an empty object to signify an error
      setResInfo({});
    }
  };

  return ResInfo;
};

export default useRestaurantMenu;
