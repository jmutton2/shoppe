import React from "react";
import person from "../assets/person.png";
import returns from "../assets/returns.jpg";
import shipping from "../assets/shipping.jpg";

const Policy = () => {
  return (
    <>
      <hr />
      <nav
        className={
          "w-full flex flex-row justify-between py-12 pb-[5em] bottom-0 z-20 bg-primary"
        }
      >
        <div className="max-w-[500px] pl-10 items-center">
          <img src={person} className="max-h-[20px] mb-2" />
          <h3>Get personal style advice</h3>
          <p className="text-gray-500 pb-3 max-w-[405px]">
            Have a style or a fit question? Chat online or book an appointment
            in our store.
          </p>
          <a className="underline">Ask a Style Expert</a>
        </div>
        <div className="max-w-[500px] m-auto justify-left items-center">
          <img src={shipping} className="max-h-[20px] mb-2" />
          <h3>Fast, free shipping</h3>
          <p className="text-gray-500 pb-3 max-w-[405px]">
            Enjoy free shipping on every order. Or pick-up in your nearest
            store.
          </p>
          <a className="underline">Learn More</a>
        </div>
        <div className="max-w-[500px] pr-10 items-center">
          <img src={returns} className="max-h-[20px] mb-2" />
          <h3>Free returns</h3>
          <p className="text-gray-500 pb-3 max-w-[405px]">
            Schedule a carrier pick-up, or drop off products at a store or
            drop-off point.
          </p>
          <a className="underline">Learn More</a>
        </div>
      </nav>
    </>
  );
};

export default Policy;
