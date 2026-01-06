import * as React from "react";

export interface customAccordionProps {
    id: string;
    title: string;
    description: string;
    expanded: boolean;
    ariaControls: string;
    namePanel: string;
    customClassAccordionDetail: string;
    customClassTypography: string;
    customClassAccordionSummary: string;
    children?: React.ReactNode;
    onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}
