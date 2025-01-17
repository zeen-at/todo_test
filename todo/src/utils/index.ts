import * as Yup from "yup";
import Pusher from 'pusher-js';


export const todoValidation = Yup.object().shape({
  title: Yup.string().required("Enter a task title"),
  date: Yup.string().required("Enter a timeline"),
  description: Yup.string(),
  createdby: Yup.string(),
});

export const EditTodoSchema = Yup.object().shape({
  title: Yup.string().required("Enter task name"),
  description: Yup.string(),
  date: Yup.date().required("Required"),
  createdby: Yup.string(),
  category: Yup.string(),
});


export const colorArray=[
  "#75FF33", 
  "#33FFBD", 
  "#3380FF", 
  "#8033FF", 
  "#FF33A8", 
  "#FF3361", 
  "#33FF57", 
  "#FF8C33", 
]
export const textColors = [
  "#333333", 
  "#4F4F4F", 
  "#3D3D3D", 
  "#1F2937", 
];



export const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
});
