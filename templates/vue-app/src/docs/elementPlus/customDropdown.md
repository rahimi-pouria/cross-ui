# CustomDropdown – Element Plus Version

## Description
The **CustomDropdown** component provides a flexible dropdown menu built on top of **Element Plus**.  
It uses the `CustomButton` component as the dropdown trigger and supports dynamic rendering of dropdown items, each of which can either be a **link** or **static text**.

---

## Props

| Prop                     | Type                                                                 | Default   | Description                                                                 |
|--------------------------|----------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------|
| `id`                     | `string`                                                            | `''`      | Unique identifier for the dropdown.                                         |
| `placement`              | `'top-start' \| 'top' \| 'top-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end'` | `'top'`   | Controls the placement of the dropdown menu relative to the trigger button. |
| `dropdownItem`           | `itemDropdown[]`                                                     | `[]`      | List of items to display in the dropdown.                                   |
| `customClassWrapperDropdown` | `string`                                                        | `''`      | Custom class for the dropdown wrapper.                                      |
| `customClassMenu`        | `string`                                                            | `''`      | Custom class for the dropdown menu container.                               |
| `customClassItem`        | `string`                                                            | `''`      | Custom class for each dropdown item.                                        |
| `customClassLinkDropdown`| `string`                                                            | `''`      | Custom class for dropdown items that are links.                             |
| `titleBtn`               | `string`                                                            | `''`      | Text/title of the trigger button.                                           |
| `customClassBtn`         | `string`                                                            | `''`      | Custom class for the trigger button.                                        |

---

## Types

```ts
export type itemDropdown = {
  id: number
  title: string
  link: string
}
