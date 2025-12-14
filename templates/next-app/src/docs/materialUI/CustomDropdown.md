# CustomDropdown – Material UI Version

## Description
The **CustomDropdown** component is a customizable dropdown menu built with **React** and **Material UI**.  
It uses **CustomButton** as the trigger and displays a list of menu items.  
Each menu item can have a title and a link. The dropdown supports custom CSS classes for styling the button and menu.

---

## Props

| Prop Name               | Type                                         | Description                                                                                     | Required |
|--------------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `title`                 | `string`                                    | Text displayed on the dropdown button.                                                        | ✅       |
| `variant`               | `'contained' | 'outlined' | 'text'`       | Material UI button variant for the dropdown trigger button.                                     | ❌       |
| `items`                 | `{ id: number; title: string; link: string }[]` | Array of menu items with `id`, `title`, and `link`.                                           | ✅       |
| `customClassBtn`        | `string`                                    | Custom CSS class applied to the dropdown button.                                              | ❌       |
| `loading`               | `boolean`                                   | If `true`, shows loading state on the button.                                                | ❌       |
| `loadingIndicator`      | `React.ReactNode`                           | Custom loading indicator for the button.                                                     | ❌       |
| `size`                  | `'small' | 'medium' | 'large'`             | Size of the dropdown button.                                                                  | ❌       |
| `id`                    | `string`                                    | Optional ID used for the dropdown button element.                                            | ❌       |

---

## Usage Example

```tsx
        <CustomDropdown
            title="Menu"
            variant="contained"
            items={menuItems}
            customClassBtn="my-dropdown-btn"
            size="medium"
        />