"use client";

import React, { useEffect, useState } from "react";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { EditTodoSchema } from "@/utils";
import { INewTodo } from "../../../../types";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import { useDispatch } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { editTodo, updateTodosAync } from "@/redux/slice/todoSlice";
import Container from "@/components/Container";

const EditTodo = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useAppDispatch();

  const router = useRouter();

  const todos = useAppSelector((state: RootState) =>
    state.todos.find((todo) => todo.id === id)
  );


  if (!todos) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const initialTodo: INewTodo = {
    id: todos.id || "",
    title: todos.title || "",
    date: todos.date || "",
    description: todos.description || "",
    // createdby: todos.createdby || "",
    done: todos.done || false,
    category: todos.category || ""
  };



  const handleEdit = (values: INewTodo) => {
    if (id) {
      dispatch(
        updateTodosAync({
          ...values,
          id: todos?.id,
        })
      );
      toast.success("Todo edited successfully!");
      router.push("/");
    }

    toast.success("Todo edited successfully!");
    router.push("/")
  };

  
  return (
    <Container>

    <div className="min-h-screen dark:bg-gray-900 flex justify-center items-center">

    <div className="bg-white dark:bg-gray-900 px-12 py-10 lg:px-6  w-full h-screen md:h-[70%] md:w-1/2 md:shadow-2xl md:rounded-2xl  mx-auto">
      <div>
        <Header title={"Edit Existing Todo"} />

        <div className="py-10 flex flex-col gap-6">
          <Formik
            initialValues={initialTodo}
            validationSchema={EditTodoSchema}
            onSubmit={(values) => handleEdit(values)}
          >
            {({
              touched,
              values,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form
                className="flex flex-col gap-10 py-6"
                onSubmit={handleSubmit}
              >
                <CustomInput
                  title="Title"
                  placeholder=""
                  value={values.title}
                  handleChange={handleChange("title")}
                  handleBlur={handleBlur("title")}
                  error={errors.title && touched.title ? errors.title : ""}
                  type="text"
                />
                <CustomInput
                  title="Date"
                  placeholder=""
                  value={values.date}
                  handleChange={handleChange("date")}
                  handleBlur={handleBlur("date")}
                  error={errors.date && touched.date ? errors.date : ""}
                  type="date"
                />
                <CustomInput
                  title="Description"
                  placeholder={""}
                  value={values.description}
                  handleChange={handleChange("description")}
                  otherStyles="my-2"
                  type="text"
                />
                {/* <CustomInput
                  title="Created By"
                  placeholder={""}
                  value={values.createdby}
                  handleChange={handleChange("createdby")}
                  otherStyles="my-2"
                  type="text"
                /> */}
                <select
                      value={values.category}
                      onChange={handleChange("category")}
                      className="dark:bg-gray-900 dark:text-gray-200 outline-none"
                    >
                      <option value="urgent">Urgent</option>
                      <option value="personal">Personal</option>
                      <option value="work">Work</option>
                    </select>
                <CustomButton title="Update Task" handleClick={handleSubmit} />{" "}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </div>
    </Container>
  );
};

export default EditTodo;
