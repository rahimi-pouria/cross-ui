// @ts-ignore
import React from "react";

export interface customButtonProps {
    id: string;
    titleBtn: string;
    variant: string;
    typeBtn: "button" | "submit" | "reset";
    size: "sm" | "lg";
    active: boolean;
    disable: boolean;
    href: string;
    customClassBtn: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
