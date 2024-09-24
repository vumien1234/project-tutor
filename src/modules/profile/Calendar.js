import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="flex flex-col md:flex-row gap-5">
            {/* Schedule Section */}
            <div className="flex flex-col w-full border rounded-md p-4">
                <h2 className="text-lg font-semibold mb-4">Lịch cá nhân</h2>

                <div className="border-t border-l flex">
                    {/* Time Column */}
                    <div className="w-16 flex flex-col border-r">
                        <div className="h-10 flex items-center justify-center text-sm">GTM+7</div>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-10 flex items-center justify-center border-b text-sm">
                                {index + 9}:00
                            </div>
                        ))}
                    </div>

                    {/* Weekdays Schedule */}
                    <div className="flex-1 grid grid-cols-7 border-b relative">
                        {["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                            <div
                                key={index}
                                className="border-r h-10 flex flex-col items-center justify-center">
                                <span className="text-xs font-semibold">{day}</span>
                                <span className="text-xs">01/05/2024</span>
                            </div>
                        ))}

                        {/* Example of an event */}
                        <div className="col-start-1 w-full row-start-1 col-span-1 absolute left-0 top-[40px] h-[120px] bg-red-500 text-white text-center text-xs font-semibold p-1 z-10">
                            <p>Toán</p>
                            <p>9:00 - 11:00</p>
                            <p>Mã lớp: D7534</p>
                            <p>GV.Tuấn</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calendar Section */}
            <div className="md:w-64 border w-full rounded-md p-2">
                <h3 className="text-base font-medium mb-2 text-center">Tháng 5 năm 2024</h3>
                <Calendar
                    onChange={setDate}
                    value={date}
                    className="border-none shadow-none"
                    tileClassName={({ date, view }) =>
                        view === "month" && date.getDate() === 1 ? "bg-red-500 text-white" : ""
                    }
                />
            </div>
        </div>
    );
};

export default CalendarComponent;
