"use client";

import React from "react";
import { INewTodo } from "../../types";
import { useRouter } from "next/navigation";

const TaskCard = (
  {
    date,
    title,
    done,
    category
    // createdby,
  }: INewTodo
) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/calendar")}
      className="mx-auto flex flex-col gap-4 md:flex-row w-full px-6 md:w-2/3 items-center justify-between py-4 md:py-2 rounded-md hover:underline"
    >
      <input type="checkbox" checked={done} />

      <div className="flex flex-col">
        <p className="font-bold">{date}</p>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <p className="font-bold ">{title}</p>

          <div className={`italic font-medium ${category === "Urgent" ? "text-red-700" : category === "Work" ? "text-white" : "text-black"}`}>{category}</div>
        </div>
      </div>
    </button>
  );
};

export default TaskCard;
