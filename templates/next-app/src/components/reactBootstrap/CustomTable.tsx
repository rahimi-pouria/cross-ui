"use client";
import Table from 'reactBootstrap/Table';
import Pagination from 'reactBootstrap/Pagination';
import { useState } from 'react';
import { customTableProps } from "@/props/Bootstrap/customTable";

const CustomTable = (props: customTableProps) => {
    const [activePage, setActivePage] = useState(props.activePage);
    const [perPage, setPerPage] = useState(props.perPage);

    const totalPages = Math.ceil(props.dataTable.body.length / perPage);

    const currentData = props.dataTable.body.slice(
        (activePage - 1) * perPage,
        activePage * perPage
    );

    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => setActivePage(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <>
            <Table className={props.customClassTable} striped={props.striped} bordered={props.bordered}
                   hover={props.hover} size={props.size}>
                <thead className={props.customClassHeadTable}>
                <tr>
                    {props.dataTable.header.map((head) => (
                        <th key={head.id} className={props.customClassTableHeader}>{head.title}</th>
                    ))}
                </tr>
                </thead>
                <tbody className={props.customClassBodyTable}>
                {currentData.map((row) => (
                    <tr key={row.id} className={props.customClassRowTable}>
                        {props.dataTable.header.map((head) => (
                            <td key={head.id} className={props.customClassTdTable}>
                                {row[head.key] ?? ""}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </Table>

            <Pagination size={props.sizePagination}>{paginationItems}</Pagination>
        </>
    );
};

export default CustomTable;
