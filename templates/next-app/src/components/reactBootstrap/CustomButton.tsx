"use client";
import Button from 'reactBootstrap/Button';
import { customButtonProps } from "@/props/Bootstrap/customButton";

const CustomButton  = (props: customButtonProps) => {
    return (
        <>
            <Button type={props.typeBtn}
                    variant={props.variant}
                    size={props.size}
                    className={props.customClassBtn}
                    onClick={props.onClick}
            >{props.titleBtn}</Button>
        </>
    )
}

export default CustomButton