import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { customTabsProps } from "@/props/bootstrap/customTabs";

const CustomTabs = (props: customTabsProps) =>{
    const [key, setKey] = useState(props.itemTabs[0].id);
    return (
        <>
            <Tabs id={props.id} activeKey={key} onSelect={(k) => setKey(k || "")} className={props.customClassTabs}>
                {props.itemTabs?.map((item) => (
                    <Tab key={item.id} eventKey={item.id} title={item.title} className={
                            props.customClassTabItem ? `${props.customClassTabItem}-${item.id}` : undefined}>
                        {
                            props.children?.[item.id] ? (props.children?.[item.id]) : (
                                item.description
                            )
                        }
                    </Tab>
                ))}
            </Tabs>
        </>
    )
}
export default CustomTabs