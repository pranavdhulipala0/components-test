import React, { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import SingleDatePicker from "./SingleDatePicker";
import { FiCalendar } from "react-icons/fi";

type FormSingleDatePickerProps = {
  label: string;
  placeholder: string;
  date: Date | null;
  setDate: (value: { date: Date | null }) => void;
  mandatory?: boolean;
  timePick?: boolean;
  minDate?: Date;
  maxDate?: Date;
};

export default function FormSingleDatePicker({
  label,
  placeholder,
  date,
  setDate,
  mandatory,
  timePick,
  minDate,
  maxDate,
}: FormSingleDatePickerProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalVisible(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if (
      //   pickerRef.current &&
      //   !pickerRef.current.contains(event.target as Node)
      // ) {
      //   setIsModalVisible(false);
      // }
    };
    if (isModalVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalVisible]);

  return (
    <div className="w-full mb-4 relative">
      {/* Label */}
      <label className="block text-gray-700 font-medium text-base mb-2">
        {label}
        {mandatory && <span className="text-red-600 ml-1">*</span>}
      </label>

      {/* Date Display */}
      <div
        ref={pickerRef}
        className="flex items-center justify-between bg-gray-100 rounded-xl px-5 py-3 text-base text-gray-950 cursor-pointer transition-all duration-150 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white"
        onClick={openModal}
      >
        <span className="text-gray-800">
          {date
            ? timePick
              ? dayjs(date).format("DD-MMMM-YYYY HH:mm:ss")
              : dayjs(date).format("DD-MMMM-YYYY")
            : placeholder}
        </span>
        <FiCalendar size={18} className="text-gray-500" />
        </div>

      {/* Date Picker Popup */}
      {isModalVisible && (
        <div className="absolute z-50 mt-2 bg-white rounded-xl shadow-lg p-4">
          <SingleDatePicker
            date={date}
            onChange={(selectedDate) => {
              setIsModalVisible(false);
              setDate({ date: selectedDate });
            }}
            minDate={minDate}
            maxDate={maxDate}
            timePick={timePick}
          />
        </div>
      )}
    </div>
  );
}
