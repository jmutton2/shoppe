import React from "react";
import location from "../assets/location.svg";
import { styles } from "../styles";

const Footer = () => {
  return (
    <>
      <hr />
      <nav
        className={
          "w-full flex flex-row justify-between items-center py-12 pb-[5em] bottom-0 z-20 bg-primary"
        }
      >
        <div className="pl-10 flex flex-row justify-center items-center">
          <img src={location} />
          &nbsp;Canada&nbsp;&#183;&nbsp;English
        </div>
        <div className="flex flex-row justify-center items-center">
          &copy;&nbsp;2023&nbsp;shoppe
        </div>
        <div className="pr-10 flex flex-row justify-center items-center">
          Terms&nbsp;&&nbsp;Conditions
        </div>
      </nav>
    </>
  );
};

export default Footer;
