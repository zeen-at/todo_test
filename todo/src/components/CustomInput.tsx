import React from "react";
import { IForm } from "../../types";

const CustomInput = ({
  error,
  title,
  handleChange,
  handleBlur,
  value,
  placeholder,
  otherStyles,
  otherTextStyles,
  type,
  
}: IForm) => {
  return (
    <>
      <div
        className={`${error ? "bg-white dark:bg-gray-900 border-b border-red-700" : "border-b border-slate-800"} flex flex-col items-start dark:bg-gray-900  ${otherStyles}`}
      >
        <h2 className="font-semibold text-md text-slate-700 dark:text-gray-200">{title}</h2>
        <input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`rounded-md w-full py-1 px-3 dark:bg-gray-900 dark:text-gray-200  ${otherTextStyles} outline-none`}
          type={type ? type : "text"}
        />
      </div>
      {error ? (
        <p className="text-red-700 dark:text-red-500 text-base text-center my-1">{error}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomInput;
