# CustomSelect – React Bootstrap Version

## Description
The **CustomSelect** component is a flexible and reusable **select dropdown** wrapper around **React Bootstrap’s `Form.Select`**.  
It supports **labels**, **custom styling**, **required validation**, and a **callback for value changes**.

---

## Props

| Prop                  | Type                                                   | Default     | Description                                                                                  |
|-----------------------|--------------------------------------------------------|------------|----------------------------------------------------------------------------------------------|
| `id`                  | `string`                                               | `''`       | HTML `id` for the select element (used by the label’s `htmlFor`).                             |
| `label`               | `string`                                               | `''`       | The text label displayed above the select dropdown.                                          |
| `ariaLabel`           | `string`                                               | `''`       | ARIA label for accessibility (used in `aria-label` attribute).                                |
| `option`              | `option[]`                                             | `[]`       | Array of options to display in the select. Each option is of type `{ id, value, label }`.    |
| `required`            | `boolean`                                              | `false`    | Whether the field is required. If empty, displays an error message.                          |
| `customClassLabel`    | `string`                                               | `''`       | Custom CSS class for the label.                                                              |
| `customClassSelect`   | `string`                                               | `''`       | Custom CSS class for the select element.                                                     |
| `customClassOption`   | `string`                                               | `''`       | Custom CSS class for each option element.                                                   |
| `showError`           | `boolean`                                              | `false`    | Force showing the error message even if input hasn't changed yet.                             |
| `onValueChange`       | `(id: string, value: string, isValid: boolean) => void` | `undefined` | Callback triggered when the value changes, returning the id, value, and validity status.     |

---

## Features

✅ Built-in **required field validation**.  
✅ Supports **custom labels, select, and option styles**.  
✅ **Real-time validation feedback** through `onValueChange`.  
✅ Automatically adds Bootstrap’s `is-invalid` class for error state.  
✅ Can display **custom error messages** or force error display with `showError`.

---

## Example Usage

```tsx

const fruits: option[] = [
  { id: "1", value: "apple", label: "Apple" },
  { id: "2", value: "banana", label: "Banana" },
  { id: "3", value: "orange", label: "Orange" },
];

<CustomSelect
      id="fruit-select"
      label="Select a fruit"
      ariaLabel="Fruit selection"
      option={fruits}
      required
      customClassLabel="mb-2 fw-bold"
      customClassSelect="form-select"
      customClassOption="text-dark"
      onValueChange={handleValueChange}
    />
