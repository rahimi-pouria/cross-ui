import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { customTooltipProps } from "@/props/bootstrap/customTooltip";
const CustomTooltip  = (props: customTooltipProps) => {
    return (
        <>
            <OverlayTrigger show={props.showTooltip} placement={props.placementTooltip} delay={{ show: props.showDelay, hide: props.hideDelay }}
                    overlay={
                        <Tooltip id={props.idTooltip}>
                            Tooltip on <strong>{props.titleTooltip}</strong>.
                        </Tooltip>
                    }>
                <span className="d-inline-block">
                    {props.children}
                </span>
            </OverlayTrigger>
        </>
    )
}

export default CustomTooltip;