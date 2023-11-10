import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between p-4 max-w-6xl mx-auto items-center">
        <Link to="/">
          <h1 className="font-bold text-2xl">Auth</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signIn">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
