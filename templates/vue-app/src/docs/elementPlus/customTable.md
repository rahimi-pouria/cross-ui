# CustomTable – Element Plus Version

## Description
The **CustomTable** component provides a fully-featured data table built on top of **Element Plus**.  
It supports sortable columns, expandable rows for nested data, selection checkboxes, and customizable operation slots.  
You can also include a search input in the table header.

---

## Props

| Prop                       | Type                                                                 | Default        | Description                                                                                     |
|----------------------------|----------------------------------------------------------------------|----------------|-------------------------------------------------------------------------------------------------|
| `dataTable`                | `tableData[]`                                                        | `[]`           | The main data array to display in the table.                                                    |
| `customClassTable`         | `string`                                                             | `''`           | Custom class for the table wrapper.                                                            |
| `customClassColumnTable`   | `string`                                                             | `''`           | Custom class applied to all table columns.                                                     |
| `customClassExpandTable`   | `string`                                                             | `''`           | Custom class for the expandable row container.                                                 |
| `selection`                | `boolean`                                                            | `false`        | Enable row selection checkboxes.                                                               |
| `subColumns`               | `boolean`                                                            | `false`        | Enable expandable rows for nested data.                                                        |
| `expandColumns`            | `Array<{ prop: string; label: string }>`                             | `[]`           | Defines the columns for the expandable child table.                                            |
| `defaultSort`              | `Array<{ prop: string; order: string }>`                             | `[]`           | Default sorting configuration for the table.                                                   |
| `sortTable`                | `string[]`                                                           | `[]`           | List of column keys that are sortable.                                                         |
| `parentBorder`             | `boolean`                                                            | `false`        | Enable border on the main table.                                                               |
| `preserveExpanded`         | `boolean`                                                            | `false`        | Preserve expanded content when data changes.                                                   |
| `fixed`                    | `string \| boolean`                                                 | `false`        | Fix the last column (operations) to the left or right.                                         |
| `labelOperation`           | `string`                                                             | `'Operations'` | Label for the operations column.                                                               |
| `showSearch`               | `boolean`                                                            | `false`        | Display a search input in the header of the operations column.                                  |
| `customClassInput`         | `string`                                                             | `''`           | Custom class for the search input component.                                                   |
| `size`                     | `'small' \| 'medium' \| 'large'`                                     | `'medium'`     | Size of the search input component.                                                            |
| `placeholder`              | `string`                                                             | `'Search...'`  | Placeholder text for the search input component.                                               |

---

## Slots

| Slot Name      | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| `operation`    | Slot for operation buttons or actions per row.                            |

---

## Types

```ts
export type tableData = {
  date: string
  name: string
  state: string
  city: string
  address: string
  zip: string
  family: FamilyMember[]
}

export type FamilyMember = {
  id: number
  name: string
  age: number
  relation: string
}
