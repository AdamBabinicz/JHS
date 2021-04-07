import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between py-3 px-5 absolute w-full text-white">
        <div className="logo">
          <h2 className="text-3xl lg:text-5xl">
            <Link to="/">
              J<span className="text-5xl lg:text-6xl">H</span>S
            </Link>
          </h2>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/projects">I-XIV</Link>
            </li>
            <li>
              <Link
                to="/hire"
                className="mr-5 bg-gray-300 text-gray-500 p-1 px-4 rounded-full font-semibold transition-all hover:bg-gray-500 hover:text-white"
              >
                Hire
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
