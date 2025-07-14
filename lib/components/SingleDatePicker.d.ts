import React from "react";
import "react-datepicker/dist/react-datepicker.css";
interface SingleDatePickerProps {
    date: Date | null;
    onChange: (date: Date | null) => void;
    minDate?: Date;
    maxDate?: Date;
    timePick?: boolean;
}
declare const SingleDatePicker: React.FC<SingleDatePickerProps>;
export default SingleDatePicker;
