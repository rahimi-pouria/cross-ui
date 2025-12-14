"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import {CustomInputProps} from "@/props/materialUI/customInput";
import {useState} from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";

const CustomInput = (props: CustomInputProps) => {
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
            err = `${props.title} is required`;
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField id={props.idInput}
                           error={!!error}
                           helperText={error || props.helperText}
                           onChange={handleChange}
                           value={value}
                           type={props.typeInput === "password" ? (isPasswordVisible ? "text" : "password") : props.typeInput}
                           required={props.required}
                           placeholder={props.placeholder} rows={props.rows}
                           multiline={props.multiline} defaultValue={props.defaultValue}
                           label={props.title} variant={props.variant} />
                {props.typeInput === 'password' &&(
                    <span onClick={togglePassword} className={`icon-show-pass ${props.customIconEye}`}
                          style={{position: "absolute", right: "2%", top: "3%",
                              transform: "translateY(-50%)", cursor: "pointer", color: "#555",}}>
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}

            </span>
                )}
            </Box>
        </>
    )
}


export default CustomInput