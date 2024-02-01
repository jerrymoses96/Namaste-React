import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
          <li> <Link to="/" className="link">Home</Link></li>
          <li> <Link to="/about" className="link">About</Link></li>
          <li> <Link to="/contact" className="link">Contact</Link></li>         
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
