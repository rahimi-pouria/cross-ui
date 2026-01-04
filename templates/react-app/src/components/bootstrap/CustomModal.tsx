import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import CustomButton from "./CustomButton";
import {customButtonProps} from "../../props/bootstrap/customButton";
import {customModal} from "../../props/bootstrap/customModal";

type customAllProps = customButtonProps & customModal

const CustomModal = (props: customAllProps) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <>
            <CustomButton id={props.id} titleBtn={props.titleBtn} variant={props.variant} typeBtn={props.typeBtn}
                          size={props.size} active={props.active} disable={props.disable} href={props.href}
                          customClassBtn={props.customClassBtn} onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className={props.customClassModalHeader} closeButton>
                    <Modal.Title className={props.customClassModalTitle}>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={props.customClassBodyModal}>
                    {props.children ? (props.children) : (
                        props.description
                    )}
                </Modal.Body>
                <Modal.Footer className={props.customClassFooterModal}>
                    <CustomButton id={props.idBtnCloseModal} titleBtn={props.titleBtnCloseModal}
                                  variant={props.variantBtnCloseModal}
                                  typeBtn={'button'}
                                  size={props.sizeCloseBtnModal} disable={false}
                                  customClassBtn={props.customClassCloseModal} onClick={handleClose} active={false}
                                  href={''} />
                    <CustomButton id={props.idBtnSubmitModal} titleBtn={props.titleBtnSubmitModal}
                                  variant={props.variantBtnSubmitModal}
                                  typeBtn={'button'}
                                  size={props.sizeSubmitBtnModal} disable={false}
                                  customClassBtn={props.customClassSubmitModal} onClick={handleClose} active={false}
                                  href={''} />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CustomModal