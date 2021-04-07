import React from "react";

const Hire = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center">
          <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row">
            <div className="bg-white bg-opacity-25 py-10 rounded lg:px-5 lg:pt-32">
              <h2 className="text-white text-center text-5xl font-semibold mb-5 lg:text-7xl">
                Napisz
              </h2>
              <p className="text-white text-center text-md font-semibold mb-5 lg:text-4xl">
                o swoim spotkaniu z JEZUSEM ZMARTWYCHWSTAŁYM
              </p>
            </div>

            <form
              name="Feedback form"
              method="post"
              className="flex flex-col bg-white bg-opacity-50 py-5 px-10 rounded lg:w-7/12"
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="imię"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-black border-opacity-50 text-black text-opacity-75 placeholder-black placeholder-opacity-80 font-semibold"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-black border-opacity-50 text-black text-opacity-75 placeholder-black placeholder-opacity-80 font-semibold"
              />
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="wiadomość"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-black border-opacity-50 text-black text-opacity-75 placeholder-black placeholder-opacity-80 font-semibold"
              ></textarea>
              <input
                type="submit"
                value="Wyślij"
                className="bg-black bg-opacity-25 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-black bg-opacity-50"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hire;
