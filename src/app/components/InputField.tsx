import React from "react";

export type InputFieldProps = {
    id: string;    
    type: string;
    label: string;
    placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
    id, type, label, placeholder,
}) => {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={id}
                className="text-sm font-medium text-gray-600">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        </div>
    );
};
