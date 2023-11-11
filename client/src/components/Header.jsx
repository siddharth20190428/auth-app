import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between p-4 max-w-6xl mx-auto items-center">
        <Link to="/">
          <h1 className="font-bold text-2xl">Auth</h1>
        </Link>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser.profilePicture}
                alt="Profile"
                className="h-8 w-8 object-cover rounded-full"
              />
            </Link>
          ) : (
            <Link to="/signin">
              <li>SignIn</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
