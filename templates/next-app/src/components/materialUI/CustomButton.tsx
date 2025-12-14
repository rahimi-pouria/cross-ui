"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonProps } from "@/props/materialUI/customButton";

const CustomButton = (props: CustomButtonProps) => {
    return (
        <>
            <Button variant={props.variant} loading={props.loading}
                    className={props.customClassBtn}
                    loadingIndicator={props.loadingIndicator}
                    onClick={props.onClick}>{props.title}</Button>
        </>
    )
}

export default CustomButton