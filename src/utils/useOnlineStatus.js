import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // creating state variables
  const [OnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    // check online status
    // if offline
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    // if online
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // return online status , boolean value
  return OnlineStatus;
};

export default useOnlineStatus;
