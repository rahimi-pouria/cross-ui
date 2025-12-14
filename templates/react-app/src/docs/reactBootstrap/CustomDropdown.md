# CustomDropdown – React Bootstrap Version

## Description
The **CustomDropdown** component is a wrapper around **React Bootstrap's `Dropdown`**.  
It allows you to create a fully customizable dropdown menu with **dynamic items**, **custom classes**, and **Bootstrap variants**.

---

## Props

| Prop                      | Type       | Default   | Description                                                                 |
|---------------------------|-----------|-----------|-----------------------------------------------------------------------------|
| `id`                      | `string`  | `''`      | The HTML id for the dropdown toggle.                                        |
| `title`                   | `string`  | `''`      | The label displayed on the dropdown toggle button.                          |
| `variant`                 | `string`  | `'primary'` | The Bootstrap variant style for the dropdown toggle (e.g. `primary`, `success`). |
| `customClassDropdown`     | `string`  | `''`      | Custom CSS classes for the main dropdown wrapper.                           |
| `customClassDropdownToggle` | `string`| `''`      | Custom CSS classes for the dropdown toggle button.                          |
| `customClassMenu`         | `string`  | `''`      | Custom CSS classes for the dropdown menu container.                         |
| `customClassMenuItem`     | `string`  | `''`      | Custom CSS classes for each dropdown menu item.                             |
| `listMenu`                | `listMenu[]` | `[]`   | An array of menu items to render inside the dropdown (with `id`, `title`, `link`). |

---

## Types

```ts
export type listMenu = {
  id: number,
  title: string,
  link: string
}
