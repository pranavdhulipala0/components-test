import React from "react";
export interface Field {
    label?: string;
    name: string;
    type: string;
    sectionBreak?: boolean;
    props?: Record<string, any>;
    component?: React.ComponentType<any> | React.ReactElement;
}
interface FunctionConfig {
    label: string;
    function: () => void;
}
interface FormBuilderProps {
    fields: Field[];
    formData: Record<string, any>;
    setFormData: (data: any) => void;
    inputColumns?: number;
    customErrors?: string[];
    setCustomErrors?: React.Dispatch<React.SetStateAction<string[]>>;
    functions?: {
        modal?: boolean;
        submit?: FunctionConfig;
        cancel?: FunctionConfig;
    };
}
declare const FormBuilder: React.FC<FormBuilderProps>;
export default FormBuilder;
