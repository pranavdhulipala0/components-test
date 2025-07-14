import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SingleDatePickerProps {
  date: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  timePick?: boolean;
}

const SingleDatePicker: React.FC<SingleDatePickerProps> = ({
  date,
  onChange,
  minDate,
  maxDate,
  timePick = false,
}) => {
  return (
    // <div className="rounded-2xl border border-gray-300 p-4 bg-white shadow-sm">
      <DatePicker
        selected={date}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        showTimeSelect={timePick}
        dateFormat={timePick ? "dd-MMMM-yyyy HH:mm:ss" : "dd-MMMM-yyyy"}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        inline
      />
    // </div>
  );
};

export default SingleDatePicker;
