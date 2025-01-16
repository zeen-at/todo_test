"use client";

import React, { useState, PropsWithChildren, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      currentTheme = "light";
      setDarkMode(false);
      localStorage.setItem("theme", currentTheme);
      setDarkMode(currentTheme === "dark" ? true : false);
    }
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen max-w-[1440px] ${className}`}
    >
      <div className="dark:bg-gray-900 ">
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white  px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <BsMoonStarsFill />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Container;
