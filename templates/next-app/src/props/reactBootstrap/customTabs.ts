import * as React from "react";

export type itemTabs = {
    id: string,
    title: string,
    description: string
}

export interface customTabsProps {
    id: string,
    customClassTabs: string,
    customClassTabItem: string,
    children?: React.ReactNode
    itemTabs: itemTabs[]
}