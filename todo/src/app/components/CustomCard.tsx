import React from "react";
import { ICard } from "../../../types";

const CustomCard = ({ title, subtitle, progress }: ICard) => {
  return (
    <div className="bg-white w-full items-start rounded-md m-2">
      
        <div className="rounded-t-md h-20 w-full px-6 py-4 bg-gradient-to-r from-[#1ca9c9] to-[#005689]">
          <h2 className="font-bold text-xl text-white">{title}</h2>
          <p className="text-base text-white my-2">Priority: </p>
        </div>
      <div>
        <div className="flex flex-row space-x-2 p-4">
          <button className="w-full bg-red-500 rounded-full">
            <p className="text-white text-center p-2">High</p>
          </button>
          <button className="w-full bg-blue-400 rounded-full">
            <div className="text-white text-center p-2">Medium</div>
          </button>
          <button className="w-full bg-orange-400 rounded-full">
            <p className="text-white text-center p-2">low</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
