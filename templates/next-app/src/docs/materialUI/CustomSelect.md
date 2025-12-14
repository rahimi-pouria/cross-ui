# CustomSelect – Material UI Version

## Description
The **CustomSelect** component is a fully customizable dropdown select built with **React** and **Material UI**.  
It supports custom CSS classes and dynamic options passed via `menuItem`.  
You can control the variant, minimum width, and handle selection changes.

---

## Props

| Prop Name                     | Type                                     | Description                                                                                     | Required |
|--------------------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `title`                        | `string`                                | Label displayed for the select dropdown.                                                      | ✅       |
| `menuItem`                      | `{ id: string | number; title: string; }[]` | Array of items to display in the dropdown. Each item should have an `id` and a `title`.       | ✅       |
| `variant`                      | `'standard' | 'outlined' | 'filled'`   | Material UI select variant.                                                                   | ❌       |
| `minWidth`                     | `string | number`                        | Minimum width of the select component. Default is `20%`.                                       | ❌       |
| `customClassWrapperSelect`     | `string`                                 | Custom CSS class applied to the wrapper div around the select.                                 | ❌       |

---

## Usage Example

```tsx
        <CustomSelect
            title="Select an Option"
            menuItem={items}
            variant="outlined"
            minWidth="200px"
            customClassWrapperSelect="my-custom-select"
        />
