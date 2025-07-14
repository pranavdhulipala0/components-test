import React from "react";
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
declare const FormRadioButton: React.FC<FormRadioButtonProps>;
export default FormRadioButton;
