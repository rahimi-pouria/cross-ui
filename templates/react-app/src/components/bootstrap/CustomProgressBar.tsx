import ProgressBar from 'react-bootstrap/ProgressBar';
import {customProgressBarProps} from "@/props/bootstrap/customProgressBar";

const CustomProgressBar = (props: customProgressBarProps) => {
    return (
        <>
            <ProgressBar now={props.nowProgressbar} label={props.labelProgressbar} visuallyHidden={props.visuallyHiddenProgressBar}
                         variant={props.variantProgressbar} striped={props.stripedProgressbar}
                         animated={props.animatedProgressbar} min={props.minProgressbar} max={props.maxProgressbar}
            />
        </>
    )
}

export default CustomProgressBar;