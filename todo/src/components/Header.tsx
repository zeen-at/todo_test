import React from "react";
import { IHeader } from "../../types";
import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

const Header = ({ title }: IHeader) => {
    const router = useRouter();
  return (
    <div className="flex flex-row space-x-3 dark:bg-gray-900  md:space-x-28">
      <button onClick={() => router.back()} className="dark:text-gray-200 hover:text-blue-500">
      <IoChevronBackOutline />
      </button>
      <div className="text-xl dark:text-gray-200 font-bold">{title}</div>
    </div>
  );
};

export default Header;
