import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import CustomButton from "./CustomButton";
const CustomTooltip  = () => {
    return (
        <>
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
            >
                <CustomButton variant={'success'} title={'Hover me to see'}/>
            </OverlayTrigger>
        </>
    )
}

export default CustomTooltip;