import React,{ useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateDropDown = () => {
    const [startDate, setStartDate] = useState(null);
    const [calendarOpen, setCalendarOpen] = useState(false);

    const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center pb-20  md:pb-10">
      <button
        className="w-24 h-6 md:w-40 md:h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold md:py-2 px-2 md:px-4 text-sm md:text-base rounded inline-flex items-center"
        onClick={toggleCalendar}
      >
        <span className="text-xs sm:text-sm md:text-base lg:p-3">Select Date</span>
        
      </button>
      {calendarOpen && (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yyyy"
          className="w-24 h-6 md:w-44 mx-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg md:z-10"
        />
      )}
    </div>
  )
}

export default DateDropDown;
