import React from "react";
import { IButton } from "../../../types";

const CustomButton = ({ handleClick, title }: IButton) => {
  return (
    <button
      onClick={handleClick}
      className="w-full py-6 "
      type="button"
    >
      
        <p className="text-center font-semibold text-lg text-white py-3 bg-emerald-900 hover:text-emerald-300">
          {" "}
          {title}
        </p>
    </button>
  );
};

export default CustomButton;
