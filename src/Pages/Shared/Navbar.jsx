import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FiLogOut } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { AuthContext } from "../../Context/ContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    logOut()
      .then(() => {
      
      })
      .catch((err) => console.log(err));
  }
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      {user && (
        <li>
          <Link to={"/bookings"}>Bookings</Link>
        </li>
      )}
      {!user && (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md py-3 fixed top-0 left-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="logo" className="w-8" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button className="btn btn-outline btn-warning">Appointment</button>
        {user && (
          <div className="flex gap-1">
            {user.photoUrl ? (
              <div className="w-8 h-8 rounded-full">{user.photoUrl}</div>
            ) : (
              <BiUserCircle size={25} />
            )}
            <span className="flex items-center" onClick={handleSingOut}>
              <FiLogOut size={25} cursor={"pointer"} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
