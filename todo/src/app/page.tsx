"use client";

import { RootState, useAppSelector } from "@/redux/store";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { INewTodo } from "../../types";
import TaskCard from "./components/TaskCard";
import { colorArray, textColors } from "./utils";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "@/helpers/strictModeDroppable";
import { useEffect, useState } from "react";
import Container from "./components/Container";

const Home = () => {
  const todo = useAppSelector((state: RootState) => state.todos);



  const [todos, updateTodos] = useState(todo || [])

  const router = useRouter();
  const dateToday = moment().format("MMMM DD, YYYY ");
  const timeToday = moment().format(" h:mm a");

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const tasks = [...todo];

    const [reorderedTasks] = tasks.splice(result.source.index, 1);

    tasks.splice(result.destination, 0, reorderedTasks);
  };

  useEffect(() => {
    updateTodos(todo)
  }, [todo])

  return (
    <Container >

    <main className="bg-white py-10 min-h-screen dark:bg-gray-900" >
      <div className="w-full px-10 lg:px-24 flex flex-row justify-between md:items-center">
        <div className="flex flex-col gap-3 my-5">
          <h1 className="text-base lg:text-xl font-bold tracking-wider text-slate-800 dark:text-gray-200">
            Hello, User
          </h1>
          <p className="text-sm md:text-md text-slate-500 dark:text-gray-200">{dateToday}</p>
          <p className="text-sm md:text-md text-slate-500 dark:text-gray-200">{timeToday}</p>
        </div>
        <div>
          <button
            onClick={() => router.push("/create-todo")}
            className="hover:text-blue-200 hover:underline bg-[#3380FF] rounded-md"
          >
            <p className="text-white  p-2 md:p-4 text-sm md:text-base">
              Create New Todo
            </p>
          </button>
        </div>
      </div>

      <div className="px-10 lg:px-24 w-full">
        <div className="flex flex-row justify-between items-center">
          <p className="pt-6 pb-2 text-lg font-bold text-slate-800 dark:text-gray-200">My Tasks</p>
          <div className="flex gap-4">
            <Link href="/todos" className=" hover:underline">
              <p className="text-slate-500 dark:text-gray-200 hover:text-blue-700 text-sm md:text-base">
                View All
              </p>
            </Link>
          </div>
        </div>

        <div className="">
          {
            // Map todos, taking note of empty state
            todo.length > 0 ? (
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todos">
                  {(provided) => (
                    <section
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {todo.slice(0, 4).map((item: INewTodo, index: number) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="my-6 shadow-md hover:bg-white dark:text-gray-200"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              style={{
                                backgroundColor:
                                  colorArray[index % colorArray.length],
                                color: textColors[index % textColors.length],
                              }}
                            >
                              <TaskCard
                                done={item.done}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                                id={item.id}
                                createdby={item.createdby}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </section>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
              <div className="flex py-10 mx-auto">
                <p className="text-slate-800 dark:text-gray-200 text-center">No available Todo</p>
              </div>
            )
          }
        </div>
      </div>
    </main>
    </Container>
  );
};

export default Home;
