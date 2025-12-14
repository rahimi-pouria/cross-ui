import * as React from "react";

export interface CustomModalProps {
    id: string,
    titleModal: string,
    idBtn: string,
    descriptionModal: string,
    children?: React.ReactNode,
    customClassTitleModal: string,
    customClassDescriptionModal: string,
    customWidthModal: number,
    sizCloseBtn: "small" | "large" | "medium",
    idModalTitle: string,
    idModalDescription: string
}