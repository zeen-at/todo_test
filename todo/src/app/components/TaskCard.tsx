import React from "react";
import { INewTodo, ITask } from "../../../types";
import { useRouter } from "next/navigation";

const TaskCard = ({
  date,
  title,
  done,
  description,
  id,
  createdby,
}: INewTodo) => {
  const router = useRouter();

  const handleCheck = () => {};
  return (
    <button className="mx-auto flex flex-col gap-4 md:flex-row w-full px-6 md:w-2/3 items-center justify-between py-4 md:py-2 rounded-md hover:underline">
      <input type="checkbox" checked={done} onChange={handleCheck} />

      <div className="flex flex-col">
        <p className="font-bold">{date}</p>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <p className="font-bold ">{title}</p>

          <p className="italic">{createdby}</p>
        </div>
      </div>
    </button>
  );
};

export default TaskCard;
