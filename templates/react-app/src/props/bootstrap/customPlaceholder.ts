import * as React from "react";

export interface customPlaceholderProps {
    idPlaceholder: string;
    bgPlaceholder: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined,
    animationPlaceholder: 'glow' | 'wave' | undefined
    sizePlaceholder: 'xs' | 'sm' | 'lg' | undefined
    variantPlaceholder: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-dark' | 'outline-light'
    children?: React.ReactNode
}