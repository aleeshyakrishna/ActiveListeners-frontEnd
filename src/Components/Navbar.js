import React, { useState } from "react";
import "../Css/Navbar.css";
import ALlogo from "../Images/ALlogo.png";
import { GiBottomRight3DArrow } from "react-icons/gi";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const CloseMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="Navbar-main">
        <div onClick={handleClick} className="nav-icons">
          {isOpen ? (
            <IoCloseOutline className="nav-icon" onClick={CloseMenu} />
          ) : (
            <RiMenu5Fill className="nav-icon" onClick={handleClick} />
          )}
          {/* <RiMenu5Fill className="nav-icon" />
          <IoCloseOutline className="nav-icon" /> */}
        </div>
        <nav>
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <NavLink to="/" className="Links">
              <li>Home</li>
            </NavLink>
            <NavLink to="/Teletherapy" className="Links">
              <li>Speak-Easy</li>
            </NavLink>
            <NavLink to="/Senses" className="Links">
              <li>Senses Resurrection</li>
            </NavLink>
            <NavLink to="/OneOnOne" className="Links">
              <li>One to One Session</li>
            </NavLink>
            {/* <NavLink to="/GriefSupport">
              <li>Grief Support</li>
            </NavLink> */}
            {/* <NavLink to="/Podcast">
              <li>Podcast</li>
            </NavLink>
            <NavLink to="/GoalVision">
              <li>GoalVision</li>
            </NavLink> */}
            <NavLink to="/GoalVision" className="Links">
              <li>About us</li>
            </NavLink>
          </ul>

          <div className="nav-icons"></div>
          <NavLink to="/">
            <img src={ALlogo} alt="" />
          </NavLink>
          <div className="Login-btns">
            <button class="full-rounded">
              <NavLink to="/Login">
                <span>Login</span>
              </NavLink>
              <div class="border full-rounded"></div>
            </button>

            <button class="full-rounded">
              <NavLink to="/Signup">
                <span>Sign up</span>
              </NavLink>
              <div class="border full-rounded"></div>
            </button>
            <GiBottomRight3DArrow />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
