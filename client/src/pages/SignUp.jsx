import { Link } from "react-router-dom";
import React from "react";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7 text-center">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
        />

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-6">
        <p>Have an Account?</p>
        <Link to="/signIn">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
