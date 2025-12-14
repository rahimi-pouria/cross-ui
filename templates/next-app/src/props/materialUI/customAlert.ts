import * as React from "react";

export interface CustomAlertProps {
    id: string,
    title: string,
    severity: 'success' | 'info' | 'warning' | 'error',
    description: string,
    showBtn: boolean
    titleBtn: string
    idBtn: string,
    customClassWrapperDescription: string,
    customClassWrapperBtn: string
    children?: React.ReactNode;
}