import * as React from "react";

export interface customModal {
    id: string,
    title: string,
    description: string
    children?: React.ReactNode,
    customClassModalHeader: string,
    customClassModalTitle: string,
    customClassBodyModal: string,
    customClassFooterModal: string,
    customClassCloseModal: string,
    sizeCloseBtnModal: "sm" | "lg",
    titleBtnCloseModal: string,
    variantBtnCloseModal: string,
    idBtnCloseModal: string,
    idBtnSubmitModal: string,
    titleBtnSubmitModal: string,
    variantBtnSubmitModal: string,
    sizeSubmitBtnModal: "sm" | "lg",
    customClassSubmitModal: string,

}