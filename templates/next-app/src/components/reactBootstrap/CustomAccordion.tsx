"use client";
import Accordion from 'reactBootstrap/Accordion';
import { customAccordion } from "@/props/Bootstrap/CustomAccordion";

const CustomAccordion = (props: customAccordion) => {
    return (
        <>
            <Accordion defaultActiveKey={props.defaultActiveKey} alwaysOpen={props.alwaysOpen}>
                <Accordion.Item eventKey={props.eventKey}>
                    <Accordion.Header>{props.title}</Accordion.Header>
                    <Accordion.Body>{props.description}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default CustomAccordion