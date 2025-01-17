"use client";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { RootState, useAppSelector } from "@/redux/store";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { parse } from "date-fns";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = () => {
  const todos = useAppSelector((state: RootState) => state.todos);

  

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={todos}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
      />
    </div>
  );
};

export default MyCalendar;
