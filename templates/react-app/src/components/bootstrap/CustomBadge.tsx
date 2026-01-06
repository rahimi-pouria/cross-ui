import Badge from 'react-bootstrap/Badge';
import { customBadgeProps } from "@/props/bootstrap/customBadge";

const CustomBadge = (props: customBadgeProps) => {
    return (
        <>
            <Badge className={props.customClassBadge} id={props.idBadge} pill={props.pillBadge} bg={props.bgBadge} text={props.textBadge}>
                {props.title}
            </Badge>
        </>
    )
}

export default CustomBadge;