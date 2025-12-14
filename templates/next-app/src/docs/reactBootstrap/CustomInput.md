# CustomInput – React Bootstrap Version (with Validation)

## Description
The **CustomInput** component is an enhanced, flexible, and reusable wrapper around **React Bootstrap’s `Form.Control`**.  
It supports **labels**, **custom styling**, **password visibility toggling**, and built-in **input validation** for required and email fields.

---

## Props

| Prop                | Type                                                                 | Default   | Description                                                                 |
|----------------------|----------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------|
| `idInput`            | `string`                                                            | `''`      | The HTML `id` for the input element (used for the label’s `htmlFor`).       |
| `label`              | `string`                                                            | `''`      | The text label displayed above the input.                                  |
| `typeInput`          | `string`                                                            | `'text'`  | The type of input (`text`, `email`, `password`, etc.).                     |
| `required`           | `boolean`                                                           | `false`   | Whether the field is required. Displays an error message if empty.         |
| `errorEmail`         | `string`                                                            | `'Invalid email address'` | Custom error message for invalid email formats.                            |
| `customClassInput`   | `string`                                                            | `''`      | Custom CSS class for styling the input field.                              |
| `customClassLabel`   | `string`                                                            | `''`      | Custom CSS class for styling the label.                                    |
| `customIconEye`      | `string`                                                            | `''`      | Custom class for the eye/eye-slash toggle icon when input type is `password`. |
| `onValueChange`      | `(id: string, value: string, isValid: boolean) => void`             | `undefined` | Callback triggered when the input value changes, returning the id, value, and validity status. |

---

## Features

✅ **Built-in validation** for required fields and email format checking.  
✅ **Password show/hide toggle** using Bootstrap’s `Eye` and `EyeSlash` icons.  
✅ **Real-time validation feedback** sent to parent components via `onValueChange`.  
✅ Fully customizable with CSS classes for **label**, **input**, and **icon**.  
✅ Designed to integrate seamlessly with **React Bootstrap forms**.

---

## Example Usage

```tsx

  <CustomInput
        idInput="email"
        label="Email Address"
        typeInput="email"
        required
        errorEmail="Please enter a valid email address"
        customClassInput="form-control"
        customClassLabel="mb-2 fw-bold"
        onValueChange={handleValueChange}
      />

      <CustomInput
        idInput="password"
        label="Password"
        typeInput="password"
        required
        customClassInput="form-control"
        customClassLabel="mb-2 fw-bold"
        customIconEye="text-primary"
      />
