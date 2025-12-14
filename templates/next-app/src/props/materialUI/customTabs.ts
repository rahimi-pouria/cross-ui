import * as React from "react";

export type headerTabType = {
    id: string,
    title: string
}

export type bodyTabType = {
    id: string,
    description: string,
    content: string | React.ReactNode
}

export type itemTab = {
    headerTab: headerTabType[],
    body: bodyTabType[]
}

export interface CustomTabsProps {
    idTab: string,
    itemTab: itemTab,
    children: React.ReactNode
}