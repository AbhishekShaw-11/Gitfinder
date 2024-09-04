import React from "react";
import { LuFrame } from "react-icons/lu";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div className="">
        <LuFrame className="text-9xl  " />
        <p className=" text-black text-2xl">
          Copyright &copy {date}. All right reversed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
