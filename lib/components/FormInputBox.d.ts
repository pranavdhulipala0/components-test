import React from "react";
interface InputBoxProps {
    label: string;
    placeholder: string;
    value: string | number;
    type: string;
    borderColor?: string;
    onChange: (text: string) => void;
    mandatory?: boolean;
    editable?: boolean;
}
export default function InputBox(props: InputBoxProps): React.JSX.Element;
export {};
