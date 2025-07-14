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
declare const FormMultiCheckbox: React.FC<FormMultiCheckboxProps>;
export default FormMultiCheckbox;
