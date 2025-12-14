"use client";
import Form from 'reactBootstrap/Form';
import {customSelectProps} from "@/props/Bootstrap/customSelect";
import {useState} from "react";
import * as React from "react";

const CustomSelect = (props: customSelectProps) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        let err: string | null = null;

        if (props.required && val.trim() === "") {
            err = `${props.label} is required`;
        }

        setValue(val);
        setError(err);

        if (props.onValueChange) {
            props.onValueChange(props.id, val, !err);
        }
    };
    return (
        <>
            <Form.Label htmlFor={props.id} className={`d-flex justify-start ${props.customClassLabel}`}>{props.label}</Form.Label>
            <Form.Select aria-label={props.ariaLabel} onChange={handleChange}
                         className={`${props.customClassSelect} ${error || props.showError ? 'is-invalid' : ''}`}
            >
                <option className={props.customClassOption}>{props.ariaLabel}</option>
                {props.option && props.option.map((item) => (
                    <option className={props.customClassOption} value={item.value} key={item.id}>{item.label}</option>
                ))}
            </Form.Select>
            {error || props.showError && (
                <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                    {error}
                </div>
            )}
        </>
    )
}

export default CustomSelect