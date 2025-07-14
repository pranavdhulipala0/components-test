import React from "react";
type FormSingleDatePickerProps = {
    label: string;
    placeholder: string;
    date: Date | null;
    setDate: (value: {
        date: Date | null;
    }) => void;
    mandatory?: boolean;
    timePick?: boolean;
    minDate?: Date;
    maxDate?: Date;
};
export default function FormSingleDatePicker({ label, placeholder, date, setDate, mandatory, timePick, minDate, maxDate, }: FormSingleDatePickerProps): React.JSX.Element;
export {};
