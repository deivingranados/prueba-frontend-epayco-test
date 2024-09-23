import React from "react";
import { ItemsProps } from "../../../interfaces";

const Itemlist: React.FC<ItemsProps> = ({ newItem }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpV7sJb83ZY2C-SV_mBhdSFDRLEx084XSzPQ&s"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {newItem.title}
          </div>
          <p className="mt-2 text-slate-500">{newItem.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Itemlist;
