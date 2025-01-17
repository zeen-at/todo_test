"use client";

import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Formik } from "formik";
import { todoValidation } from "../../utils";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ITodo } from "../../../types";
import { createTodosAync } from "@/redux/slice/todoSlice";
import Container from "@/components/Container";
import { useAppDispatch } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";

const initialTodo: ITodo = {
  title: "",
  date: "",
  description: "",
  // createdby: "",
  done: false,
  category: ""
};

const Create = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleCreateTodo = (value: ITodo) => {
    try {

      dispatch(createTodosAync({ ...value, id: uuidv4() }));

      toast.success("Task created successfully");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="min-h-screen dark:bg-gray-900 flex justify-center items-center">
        <div className="bg-white dark:bg-gray-900 px-12 py-10 lg:px-6  w-full h-screen md:h-[70%] md:w-1/2 md:shadow-2xl md:rounded-2xl  mx-auto">
          <div>
            <Header title="New Task" />

            <div className="py-10 flex flex-col gap-6">
              <Formik
                initialValues={initialTodo}
                onSubmit={(values) => handleCreateTodo(values)}
                validationSchema={todoValidation}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
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
                      <option value="">Category</option>
                      <option value="urgent">Urgent</option>
                      <option value="personal">Personal</option>
                      <option value="work">Work</option>
                    </select>

                    <CustomButton
                      title="Create Task"
                      handleClick={handleSubmit}
                    />
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Create;
