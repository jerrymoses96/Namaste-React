import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { BsCartCheck } from "react-icons/bs";

// Refactored header component
const Header = () => {
  const [Btnname, setBtnname] = useState("Login");
  const OnlineStatus = useOnlineStatus();

  const { LoggedUser } = useContext(UserContext);

  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between items-center ">
      <div className="logo w-32 ">
        <img src={LOGO_URL} alt="Company Logo" />
      </div>
      <div className="nav-items mr-5  ">
        <ul className=" flex gap-5 text-xl font-bold items-center ">
          <li className=" hover:text-orange-600  no-underline">
            {" "}
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className=" hover:text-orange-600">
            {" "}
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className=" hover:text-orange-600">
            {" "}
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className=" hover:text-orange-600">
            {" "}
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li className="">
            <Link to="/cart" className="link">
              {" "}
              <div className="flex items-center gap-1">
                <BsCartCheck />
                <span className="bg-orange-600 rounded-full w-7 h-7 text-white font-thin text-center">
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => {
              Btnname === "Login" ? setBtnname("Logout") : setBtnname("Login");
            }}
          >
            {Btnname}
          </button>
          <p>{OnlineStatus ? "🟢" : "🔴"} </p>
          <li className="font-mono  text-sm">{LoggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
