# CustomTable – Vue 3 + BootstrapVueNext

## Description

A responsive, dynamic table component built with **Vue 3** and **BootstrapVueNext (`BTable`)**.  
Supports sorting, pagination, sticky headers, custom fields, and dynamic items.  
Ideal for displaying tabular data in a flexible and reusable way.

- Accepts dynamic columns (`fields`) and data rows (`itemTableList`).
- Supports Bootstrap styling (`striped`, `hover`, etc.).
- Pagination and selection modes are fully reactive.

---

## Props

| Prop Name                | Type                                 | Required | Default       | Description                                                                 |
|---------------------------|-------------------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `id`                      | `string`                             | No       | `undefined`   | HTML id attribute for the table.                                            |
| `label`                   | `string`                             | No       | `''`          | Optional table label.                                                       |
| `itemTableList`           | `Array<Object>`                      | ✅ Yes   | `[]`          | Array of data objects to display in the table.                              |
| `fields`                  | `Array<Object>`                      | ✅ Yes   | `[]`          | Array of field objects describing columns. Only `key` and `label` are used for display. |
| `key`                     | `string \| number`                   | No       | `''`          | Unique key field in each data row.                                          |
| `footerLabel`             | `string`                             | No       | `''`          | Label displayed in the footer.                                              |
| `footClone`               | `boolean`                            | No       | `false`       | If `true`, clones the footer row.                                           |
| `sortBy`                  | `string \| Array`                    | No       | `''`          | Default sort field(s).                                                      |
| `sortDesc`                | `boolean`                            | No       | `false`       | Whether the default sort is descending.                                     |
| `sortDirection`           | `string`                             | No       | `''`          | Default sort direction.                                                     |
| `perPage`                 | `number`                             | No       | `0`           | Number of items per page for pagination.                                    |
| `currentPage`             | `number`                             | No       | `0`           | Current page number for pagination.                                         |
| `striped`                 | `boolean`                            | No       | `true`        | Enables striped rows.                                                       |
| `hover`                   | `boolean`                            | No       | `true`        | Enables row hover effect.                                                  |
| `selectMode`              | `'multi' \| 'single' \| 'range'`    | No       | `null`        | Selection mode for rows.                                                    |
| `stickyHeader`            | `boolean`                            | No       | `false`       | Makes table header sticky.                                                  |
| `tbodyTransitionProps`    | `object`                             | No       | `null`        | Vue transition props for table body.                                        |
| `theadTransitionProps`    | `object`                             | No       | `null`        | Vue transition props for table header.                                      |

---

## Events

| Event                     | Description                                               |
|----------------------------|-----------------------------------------------------------|
| `update:currentPage`       | Emits whenever the current page changes.                  |
| `update:perPage`           | Emits whenever the per-page value changes.               |

---

## Example Usage

```vue
  <custom-table
    :fields="tableFields"
    :item-table-list="tableData"
    :per-page="5"
    :current-page="1"
    :striped="true"
    :hover="true"
    :sticky-header="true"
  />

const tableData = ref([
  { first_name: 'Ali', last_name: 'Ahmadi', age: 25 },
  { first_name: 'Sara', last_name: 'Mohammadi', age: 30 },
  { first_name: 'Reza', last_name: 'Karimi', age: 28 }
])

const tableFields = ref([
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'age', label: 'Age' }
])
