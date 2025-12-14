import Dropdown from 'react-bootstrap/Dropdown';
import {customDropdownProps} from "@/props/reactBootstrap/customDropdown";


const CustomDropdown = (props: customDropdownProps) => {
    return (
        <>
            <Dropdown className={props.customClassDropdown}>
                <Dropdown.Toggle variant={props.variant} id={props.id} className={props.customClassDropdownToggle}>
                    {props.title}
                </Dropdown.Toggle>
                <Dropdown.Menu className={props.customClassMenu}>
                    {props.listMenu && props.listMenu.map((item) => (
                        <Dropdown.Item className={props.customClassMenuItem} key={item.id} href={item.link}>{item.title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default CustomDropdown