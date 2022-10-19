import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Sidebar from "../component/Sidebar";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { v4 as uuid } from "uuid";
const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex p-8 flex-col w-full ">
        <div className="my-10 text-center text-5xl">Calendar</div>
        <FullCalendar
          className="ml-10"
          editable
          selectable
          events={events}
          select={handleSelect}
          headerToolbar={{
            start: "today prev next",
            end: "dayGridMonth dayGridWeek dayGridDay",
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        />
      </div>
    </div>
  );
};

export default Calendar;
