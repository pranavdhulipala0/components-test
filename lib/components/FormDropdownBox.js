import React from "react";
import Select from "react-select";
export default function FormDropdownBox({ search, searchPlaceholder, value, onChange, items, placeholder, label, mandatory, }) {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "rgb(243 244 246)",
            borderColor: state.isFocused ? "#3B82F6" : "#D1D5DB", // blue-500 or gray-300
            boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.5)" : "none",
            borderRadius: "0.5rem", // rounded-md
            minHeight: 45,
            paddingLeft: 4,
            paddingRight: 4,
            "&:hover": {
                borderColor: "#3B82F6", // blue-500 on hover
            },
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: "0 0.5rem",
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#9CA3AF", // gray-400
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#111827", // gray-900
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 50,
        }),
    };
    const selectedOption = items.find((item) => item.value === value) || null;
    return (<div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">
        {label}
        {mandatory && <span className="text-red-600 ml-1">*</span>}
      </label>

      <Select value={selectedOption} onChange={(option) => onChange(option?.value || "")} options={items} placeholder={placeholder} styles={customStyles} isSearchable={search} noOptionsMessage={() => "No options"} className="w-full"/>
    </div>);
}
