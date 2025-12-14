"use client";
import Form from 'reactBootstrap/Form';
import { customInputProps } from "@/props/Bootstrap/customInput";
import { Eye, EyeSlash } from "reactBootstrap-icons";
import {useState} from "react";

const CustomInput = (props: customInputProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const togglePassword = () => {
        setIsPasswordVisible(prev => !prev)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        let err: string | null = null;

        if (props.required && val.trim() === "") {
            err = `${props.label} is required`;
        } else if (props.typeInput === "email" && !/\S+@\S+\.\S+/.test(val)) {
            err = props.errorEmail;
        }

        setValue(val);
        setError(err);

        if (props.onValueChange) {
            props.onValueChange(props.idInput, val, !err);
        }
    };
    return (
        <>
            <Form.Label htmlFor={props.idInput} className={`d-flex justify-start ${props.customClassLabel}`}>{props.label}</Form.Label>
            <Form.Control type={isPasswordVisible ? 'text' : props.typeInput} id={props.idInput}
                          className={`${props.customClassInput} ${error || props.showError ? 'is-invalid' : ''}`}
                          aria-describedby={props.idInput}
                          required={props.required}
                          onChange={handleChange}
                          value={value}
                          color={error || props.showError ? "failure" : "gray"}
            />
            {props.typeInput === 'password' &&(
                <span onClick={togglePassword} className={`icon-show-pass ${props.customIconEye}`}
                      style={{position: "absolute", right: "2%", top: "5.5%", transform: "translateY(-50%)", cursor: "pointer", color: "#555",}}>
                {isPasswordVisible ? <EyeSlash/> : <Eye/>}
            </span>
            )}
            {error && (
                <div className="text-danger mt-1" style={{ fontSize: "0.9rem" }}>
                    {error}
                </div>
            )}
        </>
    )
}
export default CustomInput