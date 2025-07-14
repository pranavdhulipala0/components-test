import React from "react";

interface Option {
  label: string;
  value: string;
}

interface FormMultiCheckboxProps {
  label?: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: Option[];
  wantBorder?: boolean;
}

const FormMultiCheckbox: React.FC<FormMultiCheckboxProps> = ({
  label,
  value,
  onChange,
  options,
  wantBorder = true,
}) => {
  const handleCheckboxChange = (optionValue: string) => {
    let updatedValue;
    if (value.includes(optionValue)) {
      updatedValue = value.filter((item) => item !== optionValue);
    } else {
      updatedValue = [...value, optionValue];
    }
    onChange(updatedValue);
  };

  return (
    <div className={`w-full ${wantBorder ? "border border-gray-300 rounded-md" : ""}`}>
      {label && (
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
          <span className="text-gray-700 font-medium">{label}</span>
        </div>
      )}
      <div className="divide-y divide-gray-200">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center px-4 py-3 space-x-3"
          >
            <input
              type="checkbox"
              checked={value.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="h-5 w-5 accent-blue-600 border-gray-300 rounded"
            />
            <span className="text-gray-800 text-base">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormMultiCheckbox;
