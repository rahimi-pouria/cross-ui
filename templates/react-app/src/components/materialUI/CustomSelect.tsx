import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from "react";
import { CustomSelectProps } from "@/props/material/customSelect";

const CustomSelect = (props:CustomSelectProps) =>{

    const  [age, setAge] = useState('')
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    }

    return(
        <>
            <div className={props.customClassWrapperSelect}>
                <FormControl variant={props.variant} sx={{ m: 1, minWidth: props.minWidth || "20%" }}>
                    <InputLabel id="demo-simple-select-standard-label">{props.title}</InputLabel>
                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label={props.title}>
                        {props.menuItem && props.menuItem.map((item) => (
                                <MenuItem value={item.id}>{item.title}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default CustomSelect