import Placeholder from 'react-bootstrap/Placeholder';
import { customPlaceholderProps } from "@/props/bootstrap/customPlaceholder";

const CustomPlaceholder = (props: customPlaceholderProps) => {
    return (
        <>
            <Placeholder id={props.idPlaceholder} bg={props.bgPlaceholder} animation={props.animationPlaceholder} size={props.sizePlaceholder} variant={props.variantPlaceholder}>
                {props.children}
            </Placeholder>
        </>
    )
}

export default CustomPlaceholder;
