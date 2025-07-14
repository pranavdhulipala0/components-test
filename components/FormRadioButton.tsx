import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

interface RadioButtonOption {
  label: string;
  value: string;
}

interface FormRadioButtonProps {
  label: string;
  options: RadioButtonOption[];
  value: string;
  onChange: (value: string) => void;
  flexDirection?: "row" | "column";
}

const FormRadioButton: React.FC<FormRadioButtonProps> = ({
  label,
  options,
  value,
  onChange,
  flexDirection = "row",
}) => {
  return (
    <FormControl component="fieldset" className="w-full mb-4">
      {/* Label */}
      <FormLabel
        component="legend"
        className="block text-gray-700 font-medium text-base mb-2"
      >
        {label}
      </FormLabel>

      {/* Radio options container */}
      <div
        className={`flex ${
          flexDirection === "row" ? "flex-row" : "flex-col"
        } gap-4 bg-gray-100 rounded-xl px-5 py-1`}
      >
        <RadioGroup
          row={flexDirection === "row"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={
                <Radio
                  sx={{
                    color: "#ccc",
                    "&.Mui-checked": { color: "#3b82f6" }, // Tailwind blue-500
                  }}
                />
              }
              label={
                <span className="text-gray-800 text-base">{option.label}</span>
              }
            />
          ))}
        </RadioGroup>
      </div>
    </FormControl>
  );
};

export default FormRadioButton;
