import Form from 'react-bootstrap/Form';
import { customRadioButtonProps } from "@/props/bootstrap/customRadioButton";

const CustomRadioButton = (props: customRadioButtonProps) => {
    return (
        <>
            <Form.Check id={props.idRadioButton} type={props.typeRadioButton} label={props.labelRadioButton} title={props.titleRadioButton}
                reverse={props.reverseRadioButton} disabled={props.disabledRadioButton} inline={props.inlineRadioButton} isValid={props.isValidRadioButton}
                isInvalid={props.isInvalidRadioButton} feedbackTooltip={props.feedbackTooltipRadioButton}
            >
            </Form.Check>
        </>
    )
}

export default CustomRadioButton;