import * as React from "react";

export interface customAlertProps {
    variant: string,
    customClassDescription: string,
    description: string,
    children?: React.ReactNode,
    showBtn?: boolean
}