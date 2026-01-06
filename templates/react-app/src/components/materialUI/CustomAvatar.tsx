import Avatar from '@mui/material/Avatar';
import { customAvatarProps } from "../../props/material/customAvatar";

const CustomAvatar = (props: customAvatarProps) => {
    return (
        <>
            <div className={props.customClassWrapperAvatar || 'd-flex flex-column'}>
                <Avatar alt={props.altAvatar} src={props.srcAvatar} />
                {props.children}
            </div>
        </>
    )
}

export default CustomAvatar;