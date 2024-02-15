import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Refactored header component
const Header = () => {
  const [Btnname, setBtnname] = useState("Login");
  const OnlineStatus = useOnlineStatus();

  const { LoggedUser } = useContext(UserContext);

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
          <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Cart
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
