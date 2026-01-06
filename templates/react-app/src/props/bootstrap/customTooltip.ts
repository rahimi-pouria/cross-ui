import * as React from "react";

export interface customTooltipProps {
    idTooltip: string;
    customClassTooltip: string;
    titleTooltip: string
    placementTooltip:  'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    children?: React.ReactNode
    showTooltip: boolean
    showDelay: number
    hideDelay: number
}