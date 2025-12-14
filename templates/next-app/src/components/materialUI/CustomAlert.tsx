"use client";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import {useState} from "react";
import {CustomAlertProps} from "@/props/materialUI/customAlert";
import CustomButton from "./CustomButton";
import {CustomButtonProps} from "@/props/materialUI/customButton";
type customAllProps = CustomAlertProps & CustomButtonProps
const CustomAlert = (props: customAllProps) => {
    const [open, setOpen] = useState(true)
    return(
        <>
            {open && (
                <Alert severity={props.severity} onClose={() => setOpen(false)}>
                    {props.title}
                    <div className={props.customClassWrapperDescription}>
                        {props.children ? props.children : props.description}
                    </div>
                    <div className={props.customClassWrapperBtn}>
                        {props.showBtn && (
                            <CustomButton id={props.idBtn} loading={props.loading}
                                          loadingIndicator={props.loadingIndicator}
                                          onClick={props.onClick}
                                          title={props.titleBtn} variant={props.variant} size={'sm'}
                                          customClassBtn={props.customClassBtn}/>
                        )}
                    </div>
                </Alert>
            )}
        </>
    )
}

export default CustomAlert