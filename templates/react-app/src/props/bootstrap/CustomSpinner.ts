import * as React from "react";

export interface customSpinnerProps {
    idSpinner: string;
    animationSpinner: 'border' | 'grow' | undefined
    sizeSpinner: 'sm' | undefined
    variantSpinner: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined
    roleSpinner: string
    children?: React.ReactNode;
}