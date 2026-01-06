import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CustomButton from "./CustomButton";
import {CustomDropdownProps} from "@/props/material/customDropdown";
import {CustomButtonProps} from "@/props/material/customButton";

type customAllProps = CustomDropdownProps & CustomButtonProps

const CustomDropdown = (props: customAllProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div>
                <CustomButton id={`basic-button ${props.id}`} title={props.title}
                              variant={props.variant}
                              aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              customClassBtn={props.customClassBtn}
                              aria-expanded={open ? 'true' : undefined}
                              loading={props.loading}
                              onClick={handleClick}
                              loadingIndicator={props.loadingIndicator} size={props.size}
                />
                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                    }}
                >
                    {props.items&& props.items.map((item) => (
                        <MenuItem key={item.id} component="a" href={item.link}>{item.title}</MenuItem>
                    ))}
                </Menu>
            </div>
        </>
    )
}

export default CustomDropdown