"use client";
import Alert from 'reactBootstrap/Alert';
import { useState } from "react";
import { customAlertProps } from "@/props/Bootstrap/customAlert";
import CustomButton from "./CustomButton";
import { customButtonProps } from "@/props/Bootstrap/customButton";

type CustomAlertProps = customAlertProps & customButtonProps;

const CustomAlert = (props: CustomAlertProps) => {
    const [show, setShow] = useState(true);

    const close = () => {
        setShow(false);
    };
    return (
        <Alert show={show} variant={props.variant} onClose={close} dismissible>
            {props.children ? (
                props.children) : (<div className={props.customClassDescription}>{props.description}</div>)}
            {props.showBtn ? (props.showBtn) : (
                <div className="d-flex w-100 justify-content-end">
                    <CustomButton variant={props.variant} titleBtn={props.titleBtn} active={props.active}
                                  customClassBtn={props.customClassBtn}
                                  disable={false} href={props.href} id={props.id} typeBtn={props.typeBtn}
                                  size={props.size} onClick={close}/>
                </div>
            )}
        </Alert>
    );
};

export default CustomAlert;
