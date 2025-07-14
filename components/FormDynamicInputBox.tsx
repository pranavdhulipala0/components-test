import React from "react";

interface FormDynamicInputBoxProps {
  label: string;
  placeholder: string;
  value: string[];
  onChange: (values: string[]) => void;
}

const FormDynamicInputBox: React.FC<FormDynamicInputBoxProps> = ({
  label,
  placeholder,
  value = [],
  onChange,
}) => {
  const values = value.length > 0 ? value : [""];

  const addInputField = () => {
    onChange([...values, ""]);
  };

  const removeInputField = (index: number) => {
    if (values.length === 1) return;
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  const handleInputChange = (text: string, index: number) => {
    const newValues = [...values];
    newValues[index] = text;
    onChange(newValues);
  };

  return (
    <div className="bg-white rounded-lg mb-4">
      <div className="text-gray-600 text-base my-2">{label}</div>

      {values.map((fieldValue, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg p-3 text-gray-800 text-base font-normal focus:outline-none"
            placeholder={placeholder}
            value={fieldValue}
            onChange={(e) => handleInputChange(e.target.value, index)}
          />

          {index > 0 && (
            <button
              type="button"
              className="ml-2"
              onClick={() => removeInputField(index)}
            >
              {/* <img
                src={closeIcon}
                alt="Remove"
                className="w-6 h-6 object-contain"
                style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(30%) saturate(2280%) hue-rotate(312deg) brightness(93%) contrast(87%)" }} // red200 tint equivalent
              /> */}
              <text>Remove</text>
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addInputField}
        className="flex justify-end items-center text-primary-400 text-sm font-medium"
      >
        + Add
      </button>
    </div>
  );
};

export default FormDynamicInputBox;
