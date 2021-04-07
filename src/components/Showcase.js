import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-end text-white px-5 pb-20">
          <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-50">
            Jezus <span className="text-gray-400">Chrystus</span> Zbawiciel
          </h1>
          <div className="ml-auto lg:ml-0">
            <Link
              to="/hire"
              className="mr-5 bg-gray-400 p-2 px-4 rounded-full font-semibold transition-all hover:bg-gray-500"
            >
              czeka na Ciebie!
            </Link>
            <Link
              to="/project"
              className="mr-5 bg-white text-gray-400 p-2 px-4 rounded-full font-semibold transition-all hover:bg-gray-400 hover:text-white"
            >
              przyjdź!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
