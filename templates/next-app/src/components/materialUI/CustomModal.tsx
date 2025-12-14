"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import CustomButton from "./CustomButton";
import { CustomButtonProps } from "@/props/materialUI/customButton";
import { CustomModalProps } from "@/props/materialUI/customModal";

type customAllProps = CustomButtonProps & CustomModalProps

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const CustomModal = (props: customAllProps) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <CustomButton onClick={handleOpen} title={props.title} variant={props.variant} customClassBtn={props.customClassBtn} id={props.idBtn}
                          loading={props.loading} loadingIndicator={props.loadingIndicator} size={props.size}/>
            <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={{...style, width: props.customWidthModal || 400, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',}}>
                    <IconButton aria-label="close" onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8 }} size={props.sizCloseBtn}>
                        <CloseIcon fontSize={props.sizCloseBtn} />
                    </IconButton>

                    <h2 id={`child-modal-title-${props.idModalTitle}`} className={props.customClassTitleModal}>
                        {props.titleModal}
                    </h2>

                    {props.children ? (props.children) : (
                        <p id={`child-modal-description-${props.idModalDescription}`} className={props.customClassDescriptionModal}>
                            {props.descriptionModal}
                        </p>
                    )}
                </Box>
            </Modal>
        </>
    )
}

export default CustomModal