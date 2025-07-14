import React from "react";
interface FormDynamicInputBoxProps {
    label: string;
    placeholder: string;
    value: string[];
    onChange: (values: string[]) => void;
}
declare const FormDynamicInputBox: React.FC<FormDynamicInputBoxProps>;
export default FormDynamicInputBox;
