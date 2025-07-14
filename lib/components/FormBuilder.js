import React, { useEffect, useRef, useState } from "react";
import FormDropdownBox from "./FormDropdownBox";
import InputBox from "./FormInputBox";
import FormDynamicInputBox from "./FormDynamicInputBox";
import FormRadioButton from "./FormRadioButton";
import FormMultiCheckbox from "./FormMultiCheckbox";
// import UploadFileComponent from "../media/UploadFilesComponent";
import MultiSelectBox from "./MultiSelectBox";
import FormSingleDatePicker from "./FormSingleDatePicker";
const componentMap = {
    dropdown: FormDropdownBox,
    "input-box": InputBox,
    "dynamic-input-box": FormDynamicInputBox,
    datepicker: FormSingleDatePicker,
    // "time-input-box": TimeInputBox,
    empty: () => <div />,
    "radio-input": FormRadioButton,
    "multi-checkbox": FormMultiCheckbox,
    // upload: UploadFileComponent,
    "multi-select-box": MultiSelectBox,
    // "dynamic-group-input-box": FormDynamicGroupInputBox,
};
const FormBuilder = ({ fields, formData, setFormData, inputColumns = 3, customErrors = [], setCustomErrors, functions, }) => {
    const [formErrors, setFormErrors] = useState([]);
    const errorRef = useRef(null);
    useEffect(() => {
        if ((formErrors.length > 0 || customErrors.length > 0) && errorRef.current) {
            errorRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [formErrors, customErrors]);
    const handleChange = (key, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };
    const handleMultiSelectChange = (fieldName, selectedItem, selectedItems) => {
        if (selectedItems) {
            handleChange(fieldName, selectedItems);
            return;
        }
        const currentValue = formData[fieldName] || [];
        let updatedItems;
        if (currentValue.includes(selectedItem)) {
            updatedItems = currentValue.filter((item) => item !== selectedItem);
        }
        else {
            updatedItems = [...currentValue, selectedItem];
        }
        handleChange(fieldName, updatedItems);
    };
    const validateForm = () => {
        let isValid = true;
        const errors = [];
        for (const field of fields) {
            if (field.type === "empty" || field.type === "custom_component")
                continue;
            const value = formData[field.name];
            const isEmpty = value === "" ||
                value === null ||
                value === undefined ||
                (Array.isArray(value) && value.length === 0);
            if (field?.props?.mandatory && isEmpty) {
                errors.push(`${field.props?.label || field.label || field.name} is required.`);
                isValid = false;
            }
            if (field?.props?.keyboardType === "numeric" &&
                value !== undefined &&
                value !== null &&
                isNaN(Number(value))) {
                errors.push(`${field.label || field.name} must be a number.`);
                isValid = false;
            }
            if ((field?.props?.maxLength || field.props?.fixedLength) &&
                value !== undefined &&
                value !== null) {
                const stringValue = String(value);
                if (field.props.maxLength && stringValue.length > field.props.maxLength) {
                    errors.push(`${field.label || field.name} must be at most ${field.props.maxLength} characters.`);
                    isValid = false;
                }
                if (field.props.fixedLength && stringValue.length !== field.props.fixedLength) {
                    errors.push(`${field.label || field.name} must be exactly ${field.props.fixedLength} characters.`);
                    isValid = false;
                }
            }
            if (field.props?.keyboardType === "email-address" && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errors.push(`${field.label || field.name} must be a valid email address.`);
                    isValid = false;
                }
            }
        }
        setFormErrors(errors);
        return isValid;
    };
    const handleSubmit = () => {
        if (!validateForm()) {
            setCustomErrors && setCustomErrors([]);
            return;
        }
        functions?.submit?.function();
    };
    const rows = [];
    let currentRow = [];
    fields.forEach((field) => {
        if (field.sectionBreak && currentRow.length > 0) {
            rows.push(currentRow);
            currentRow = [];
        }
        currentRow.push(field);
        if (currentRow.length === inputColumns) {
            rows.push(currentRow);
            currentRow = [];
        }
    });
    if (currentRow.length > 0) {
        rows.push(currentRow);
    }
    return (<div className="w-full" ref={errorRef}>
      {(formErrors.length > 0 || customErrors.length > 0) && (<div className="bg-red-100 rounded-md p-4 my-4">
          <text className="text-red-800 font-semibold mb-2">Errors found!</text>
          {formErrors.map((err, idx) => (<div key={idx} className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full mt-1"></span>
              <text className="text-red-700 text-sm">{err}</text>
            </div>))}
          {customErrors.map((err, idx) => (<div key={idx} className="flex items-start space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full mt-1"></span>
              <text className="text-red-700 text-sm">{err}</text>
            </div>))}
        </div>)}

      {rows.map((row, rowIndex) => (<div key={`row-${rowIndex}`} className="flex flex-wrap gap-6 mb-4">
          {row.map((field, index) => {
                if (field.type === "custom_component") {
                    return (<div key={`${rowIndex}-${index}`} className="flex-1">
                  {React.isValidElement(field.component)
                            ? field.component
                            : field.component
                                ? React.createElement(field.component, {
                                    value: formData[field.name] || "",
                                    onChange: (value) => handleChange(field.name, value),
                                    ...field.props,
                                })
                                : null}
                </div>);
                }
                const Component = componentMap[field.type];
                if (!Component)
                    return null;
                return (<div key={`${rowIndex}-${index}`} className="flex-1">
                {(() => {
                        switch (field.type) {
                            case "datepicker":
                                return (<FormSingleDatePicker label={field.label || ""} placeholder="Select date" date={formData[field.name] || null} setDate={(value) => handleChange(field.name, value.date)} {...field.props}/>);
                            case "upload":
                                // return (
                                //   <UploadFileComponent
                                //     title={field.label}
                                //     filepath={field.props?.filepath || "uploads"}
                                //     uploadTrigger={field.props?.uploadTrigger || false}
                                //     onChange={(value: any) => handleChange(field.name, value)}
                                //     isSingleFile={field.props?.isSingleFile || false}
                                //     mimeTypes={field.props?.mimeTypes || ["*/*"]}
                                //     {...field.props}
                                //   />
                                // );
                                break;
                            case "multi-select-box":
                                return (<MultiSelectBox selectedItems={formData[field.name] || []} onChange={(selected, selectedItems) => {
                                        handleMultiSelectChange(field.name, selected, selectedItems);
                                    }} items={field.props?.items || []} {...field.props}/>);
                            // case "dynamic-group-input-box":
                            //   return (
                            //     <FormDynamicGroupInputBox
                            //       label={field.label || ""}
                            //       fields={field.props?.fields || []}
                            //       value={formData[field.name] || []}
                            //       onChange={(updated: Record<string, string>[]) =>
                            //         handleChange(field.name, updated)
                            //       }
                            //       addButtonText={field.props?.addButtonText}
                            //       {...field.props}
                            //     />
                            //   );
                            default:
                                return (<Component value={formData[field.name] || ""} onChange={(value) => handleChange(field.name, value)} {...field.props}/>);
                        }
                    })()}
              </div>);
            })}
        </div>))}

      {(functions?.submit || functions?.cancel) && (<div className={`flex ${functions.modal ? "justify-between" : "justify-end"} gap-3 mt-4`}>
          {functions?.cancel && (<button onClick={functions.cancel.function} className="border border-gray-400 bg-white text-gray-800 px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-100">
              {functions.cancel.label}
            </button>)}
          {functions?.submit && (<button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-blue-700">
              {functions.submit.label}
            </button>)}
        </div>)}
    </div>);
};
export default FormBuilder;
