import Spinner from 'react-bootstrap/Spinner';
import { customSpinnerProps } from "@/props/bootstrap/CustomSpinner";

const CustomSpinner = (props: customSpinnerProps) => {
    return (
        <>
            <Spinner id={props.idSpinner} animation={props.animationSpinner} role={props.roleSpinner}
                     size={props.sizeSpinner}
                     variant={props.variantSpinner}>
                 {props.children}
            </Spinner>
        </>
    )
}

export default CustomSpinner;