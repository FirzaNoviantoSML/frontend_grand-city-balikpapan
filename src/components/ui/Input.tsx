import React from 'react'
import { ErrorMessage, Field } from "formik";

interface InputProps {
    name: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
    as?: string;
    id?: string;
    children?: React.ReactNode;
    label?: string
    error?: boolean
    options?: { label: string; value: string }[];
}
const Input: React.FC<InputProps> = ({
    name,
    type = "text",
    placeholder = "",
    className = "",
    as = "input",
    children,
    id,
    label,
    error = true,
    options = []
}) => {
    return (
        <div className='w-full'>
            {label &&
                <label htmlFor={name}>{label}</label>
            }
            {as === "select" ? (
                <Field name={name} as="select" id={id} className={className}>
                    <option className='rounded-none' value="">
                        Select cluster
                    </option>
                    {options.map((option, index) => (
                        <option className='rounded-none' key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Field>
            ) : (
                <Field
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={className}
                    as={as}
                    id={id}

                >
                    {children}
                </Field>
            )}
            {error &&
                <ErrorMessage
                    name={name}
                    component="div"
                    className="text-xs text-red-700"
                />
            }
        </div>
    )
}


export { Input }