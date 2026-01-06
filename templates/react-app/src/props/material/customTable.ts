import * as React from "react";

export type headerData = {
    id: 1,
    title: string
}

export type  rowData = {
    id: number;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}


export type TableData = {
    headers: headerData[];
    rows: rowData[];
};

export interface CustomTableProps {
    id: string,
    dataTable: TableData,
    align: 'right' | 'left' | 'center',
    children: React.ReactNode
}