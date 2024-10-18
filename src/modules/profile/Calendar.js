import React, { useEffect, useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

require("react-big-calendar/lib/css/react-big-calendar.css");

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(moment());
  const [end, setEnd] = useState(moment().add(1, "hour"));
  const [desc, setDesc] = useState("");
  const [openSlot, setOpenSlot] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [clickedEvent, setClickedEvent] = useState({});

  // Đóng dialog
  const handleClose = () => {
    setOpenEvent(false);
    setOpenSlot(false);
  };

  // Chọn slot (tạo sự kiện mới)
  const handleSlotSelected = (slotInfo) => {
    setStart(moment(slotInfo.start));
    setEnd(moment(slotInfo.end));
    setTitle("");
    setDesc("");
    setOpenSlot(true);
  };

  // Chọn sự kiện (xem/sửa sự kiện)
  const handleEventSelected = (event) => {
    setClickedEvent(event);
    setStart(moment(event.start));
    setEnd(moment(event.end));
    setTitle(event.title);
    setDesc(event.desc);
    setOpenEvent(true);
  };

  // Thay đổi thời gian bắt đầu
  const handleStartTime = (newTime) => {
    setStart(newTime);
  };

  // Thay đổi thời gian kết thúc
  const handleEndTime = (newTime) => {
    setEnd(newTime);
  };

  // Thêm sự kiện mới
  const setNewAppointment = () => {
    const appointmentStart = moment(start);
    let appointmentEnd = moment(end);

    // Nếu end vượt quá ngày start, ta đặt end là cuối ngày start
    if (!appointmentStart.isSame(appointmentEnd, "day")) {
      appointmentEnd = appointmentStart.clone().endOf("day");
    }

    const newAppointment = {
      title,
      start: appointmentStart.toDate(),
      end: appointmentEnd.toDate(),
      desc,
    };

    setEvents([...events, newAppointment]);
  };

  // Cập nhật sự kiện
  const updateEvent = () => {
    const updatedEvents = events.map((event) =>
      event === clickedEvent
        ? { ...event, title, desc, start: start.toDate(), end: end.toDate() }
        : event
    );
    setEvents(updatedEvents);
  };

  // Xóa sự kiện
  const deleteEvent = () => {
    const updatedEvents = events.filter(
      (event) => !moment(event.start).isSame(start)
    );
    setEvents(updatedEvents);
  };

  useEffect(() => {
    setStart(moment());
    setEnd(moment().add(1, "hour"));
  }, []);

  // Nút hành động cho sự kiện (sửa)
  const eventActions = [
    <Button variant="outlined" onClick={handleClose} key="cancel">
      Hủy
    </Button>,
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => {
        deleteEvent();
        handleClose();
      }}
      key="delete"
    >
      Xóa
    </Button>,
    <Button
      variant="contained"
      onClick={() => {
        updateEvent();
        handleClose();
      }}
      key="confirm"
    >
      Xác nhận sửa
    </Button>,
  ];

  // Nút hành động cho đặt lịch
  const appointmentActions = [
    <Button variant="outlined" color="secondary" onClick={handleClose} key="cancel">
      Hủy
    </Button>,
    <Button
      variant="contained"
      onClick={() => {
        setNewAppointment();
        handleClose();
      }}
      key="submit"
    >
      Xác nhận đặt
    </Button>,
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div id="Calendar">
        <BigCalendar
          events={events}
          localizer={localizer}
          views={["month", "week", "day", "agenda"]}
          timeslots={2}
          defaultView="month"
          defaultDate={new Date()}
          selectable={true}
          onSelectEvent={handleEventSelected}
          onSelectSlot={handleSlotSelected}
        />

        {/* Dialog đặt lịch mới */}
        <Dialog open={openSlot} onClose={handleClose}>
          <div style={{ padding: "20px" }}>
            <h4 className="mb-5 font-bold">
              Đặt lịch vào {start.format("MMMM Do YYYY")}
            </h4>
            <TextField
              label="Tiêu đề"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Mô tả"
              fullWidth
              onChange={(e) => setDesc(e.target.value)}
              style={{ margin: "10px 0" }}
            />
            <div className="mt-3 flex flex-row gap-5">
              <TimePicker
                label="Thời gian bắt đầu"
                value={start}
                onChange={handleStartTime}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="Thời gian kết thúc"
                value={end}
                onChange={handleEndTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div
              style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}
            >
              {appointmentActions}
            </div>
          </div>
        </Dialog>

        {/* Dialog xem/sửa sự kiện */}
        <Dialog open={openEvent} onClose={handleClose}>
          <div style={{ padding: "20px" }}>
            <h3>Xem/Sửa lịch vào {start.format("MMMM Do YYYY")}</h3>
            <TextField
              label="Tiêu đề"
              defaultValue={title}
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Mô tả"
              defaultValue={desc}
              multiline
              fullWidth
              onChange={(e) => setDesc(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <div className="mt-3 flex flex-row gap-5">
              <TimePicker
                label="Thời gian bắt đầu"
                value={start}
                onChange={handleStartTime}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="Thời gian kết thúc"
                value={end}
                onChange={handleEndTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div
              style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}
            >
              {eventActions}
            </div>
          </div>
        </Dialog>
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
