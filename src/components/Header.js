import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// Refactored header component
const Header = () => {
  const [Btnname,setBtnname] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Company Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="btn" onClick={() =>{
             Btnname === "Login" ? setBtnname("Logout") : setBtnname("Login");
          }}>
            {Btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
