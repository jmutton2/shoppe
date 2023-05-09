import React from "react";

const Newsletter = () => {
  return (
    <>
      <hr />
      <nav
        className={
          "w-full flex flex-row justify-center px-10 py-12  bottom-0 z-20 bg-primary"
        }
      >
        <div className="w-full m-auto justify-end items-center">
          <h3 className="text-gray-500 text-bold">JOIN OUR NEWSLETTER</h3>
          <p>Get the latest on products and styling.</p>
        </div>
        <div className="w-full bg-secondary m-5 p-2">
          <form className="bg-white rounded flex flex-row">
            <input
              className="appearance-none w-full py-2 px-3 text-gray-800 leading-tight bg-secondary focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
            ></input>
            <button
              className=" bg-primary hover:bg-secondary text-black py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Newsletter;
