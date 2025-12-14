"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { customAccordionProps } from "@/props/materialUI/customAccordion";

const CustomAccordion = (props: customAccordionProps & { expanded: boolean; onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void; }) => {
    return (
        <Accordion expanded={props.expanded} onChange={props.onChange}>
            <AccordionSummary className={props.customClassAccordionSummary} expandIcon={<ExpandMoreIcon />} aria-controls={props.ariaControls} id={props.id}>
                <Typography className={props.customClassTypography} component="span" sx={{ width: '33%', flexShrink: 0 }}>
                    {props.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={props.customClassAccordionDetail}>
                {props.children ? props.children : <Typography>{props.description}</Typography>}
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion;
