import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

const ApptPage = () => {

    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);

        //finish

    };

    return (
        <div className="container mx-auto mt-8 p-8 max-w-lg bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Book Doctor Appointment</h2>
            <div className="mb-4">
                {/* <Calendar onChange={handleDateChange} value={date} /> */}
            </div>
            <p className="text-gray-600 text-sm">
                Select a date and time for your appointment.
            </p>
        </div>
    )
}

export default ApptPage;