# CustomTable – React Bootstrap Version (Dynamic Table with Pagination)

## Description
The **CustomTable** component is a fully **dynamic and reusable table** built on **React Bootstrap’s `Table`**.  
It allows you to **define columns and rows dynamically**, customize table styles, and includes **pagination**.

---

## Props

| Prop                        | Type                                                                 | Default   | Description                                                                 |
|------------------------------|----------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------|
| `id`                         | `string`                                                             | `''`      | The HTML `id` for the table.                                               |
| `title`                      | `string`                                                             | `''`      | Title of the table (for reference, optional).                              |
| `dataTable`                  | `dataType`                                                           | `[]`      | The data to display, including `header` and `body`.                        |
| `striped`                    | `boolean`                                                            | `false`   | Whether to apply striped rows.                                             |
| `bordered`                   | `boolean`                                                            | `false`   | Whether to apply borders on all cells.                                     |
| `hover`                      | `boolean`                                                            | `false`   | Whether rows change background on hover.                                    |
| `size`                       | `string`                                                             | `'md'`    | Table size (`sm`, `md`, `lg`).                                             |
| `customClassBodyTable`       | `string`                                                             | `''`      | Custom CSS class for the table body.                                        |
| `customClassHeadTable`       | `string`                                                             | `''`      | Custom CSS class for the table header.                                      |
| `customClassTable`           | `string`                                                             | `''`      | Custom CSS class for the whole table.                                       |
| `customClassRowTable`        | `string`                                                             | `''`      | Custom CSS class for each row.                                              |
| `customClassTdTable`         | `string`                                                             | `''`      | Custom CSS class for each table cell.                                       |
| `perPage`                    | `number`                                                             | `10`      | Number of rows per page.                                                    |
| `activePage`                 | `number`                                                             | `1`       | Initial active page for pagination.                                         |
| `sizePagination`             | `'sm' | 'lg'`                                                       | `'sm'`    | Size of pagination component.                                              |
| `customClassTableHeader`     | `string`                                                             | `''`      | Custom CSS class for `<th>` elements.                                       |

---

## Data Types

```ts
export type headerTable = {
    id: number;
    title: string; // Column title
    key: string;   // Key in body data
};

export type bodyTable = {
    id: number;
    [key: string]: string | number; // Column values can be dynamic
};

export type dataType = {
    id: number;
    header: headerTable[];
    body: bodyTable[];
};
