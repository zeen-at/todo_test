"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface IQuery {
  initialQuery: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ initialQuery, handleChange }: IQuery) => {
  return (
    <div className="w-full px-4 py-2 md:py-3 bg-blue-50 dark:bg-gray-700  rounded-xl justify-between items-center flex">
      <input
        className=" md:block outline-none dark:bg-gray-700 bg-blue-50 "
        value={initialQuery}
        placeholder="Find your task"
        onChange={handleChange}
      />
      
      <button
      className="text-slate-500 font-bold
       items-center"
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
