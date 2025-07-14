import React from "react";
interface MultiSelectItem {
    label: string;
    value: string;
}
interface MultiSelectBoxProps {
    items: MultiSelectItem[];
    selectedItems: string[];
    onChange: (item: string, selectedItems?: string[]) => void;
    placeholder?: string;
    label?: string;
    mandatory?: boolean;
}
declare const MultiSelectBox: React.FC<MultiSelectBoxProps>;
export default MultiSelectBox;
