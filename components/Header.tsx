"use client";
import axios from "axios";

import { useEffect, useState } from "react";
import navListData from "../public/data/NavList";
import accountList from "../public/data/Account";

function Header() {

  const [clicked, setClicked] = useState(false);
  const drop = () => {
    setClicked(true);
  };
  const undrop = () => {
    setClicked(false);
  };

  return (
      <div className=" w-full flex flex-row items-center justify-between text-lg px-2 py-4 fixed z-10 bg-black">
      <div className="logo font-bold">Logo</div>
      <div className="nav">
        <ul className="flex flex-row items-center justify-between">
          {navListData.map((nav) => (
            <a
              href={nav.link}
              className="mx-2 px-3 py-2 header md:flex hidden lg:flex"
              key={nav._id}
            >
              {" "}
              <li key={nav._id} className="">
                {nav.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex lg:flex">
        <ul className="flex  flex-row-reverse">
          {accountList.map((account) => (
            <a
              href={account.link}
              key={account._id}
              className={`mr-3 rounded-lg hover:bg-green-950 transition-all duration-1000 px-3 text-center py-2 header ${
                account._id == 2 ? "bg-green-800" : "border-green-900 border-2"
              }`}
            >
              <li key={account._id} className="text-center">
                {account.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div
        className="flex md:hidden lg:hidden text-3xl cursor-pointer"
        onClick={drop}
      >
        &#9776;
      </div>

      <div
        className={`${
          clicked
            ? "flex  drop absolute  h-screen justify-end top-0 w-screen p-0"
            : "hidden"
        }`}
        onClick={undrop}
      >
        <a
          className="text-red-900 z-20 absolute right-7 top-3 text-4xl cursor-pointer"
          onClick={undrop}
        >
          &times;
        </a>
        <ul className="flex flex-col items-start pt-7 justify-start bg-slate-950 w-2/3">
          {navListData.map((nav) => (
            <a
              href={nav.link}
              className="mx-4 px-3 py-2 my-2 header md:flex lg:flex"
              key={nav._id}
              onClick={undrop}
            >
              {" "}
              <li key={nav._id} className="">
                {nav.name}
              </li>
            </a>
          ))}
        </ul>

        <ul className="flex flex-col-reverse absolute top-12 right-9">
          {accountList.map((account) => (
            <a
              href={account.link}
              key={account._id}
              className={`mt-3 px-3 py-1 header text-center ${
                account._id == 2 ? "bg-green-900" : "border-green-900 border-2"
              }`}
            >
              <li key={account._id} className="text-center">{account.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
