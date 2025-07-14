import React from "react";
interface DropdownProps {
    value: string;
    onChange: (value: string) => void;
    items: {
        label: string;
        value: string;
    }[];
    placeholder: string;
    label: string;
    search: boolean;
    searchPlaceholder?: string;
    mandatory?: boolean;
    styles?: any;
}
export default function FormDropdownBox({ search, searchPlaceholder, value, onChange, items, placeholder, label, mandatory, }: DropdownProps): React.JSX.Element;
export {};
