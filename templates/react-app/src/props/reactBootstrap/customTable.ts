export type headerTable = {
    id: number;
    title: string;
    key: string;
};

export type bodyTable = {
    id: number;
    [key: string]: string | number;
};

export type dataType = {
    id: number;
    header: headerTable[];
    body: bodyTable[];
}

export interface customTableProps {
    id: string;
    title: string;
    dataTable: dataType;
    striped: boolean,
    bordered: boolean,
    hover : boolean,
    size: string,
    customClassBodyTable:string,
    customClassHeadTable: string,
    customClassTable: string,
    customClassRowTable: string,
    customClassTdTable: string,
    perPage: number,
    activePage: number,
    sizePagination: 'sm' | 'lg',
    customClassTableHeader: string
}
