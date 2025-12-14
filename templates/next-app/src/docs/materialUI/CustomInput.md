# CustomInput – Material UI Version

## Description
The **CustomInput** component is a fully customizable input field built with **React** and **Material UI**.  
It supports multiple input types including `text`, `email`, and `password`.  
For password fields, it includes a toggle icon to show or hide the password.  
Validation for required fields and email format is included, and you can pass `children` or use `helperText` for additional guidance.

---

## Props

| Prop Name             | Type                                          | Description                                                                                     | Required |
|------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `idInput`             | `string`                                     | Unique ID for the input element.                                                              | ✅       |
| `title`               | `string`                                     | Label displayed above the input field.                                                       | ✅       |
| `typeInput`           | `'text' | 'password' | 'email' | 'number'` | Type of input field. Supports password toggle for `'password'`.                                | ✅       |
| `placeholder`         | `string`                                     | Placeholder text displayed inside the input.                                                 | ❌       |
| `required`            | `boolean`                                    | If `true`, marks the field as required and performs basic validation.                        | ❌       |
| `errorEmail`          | `string`                                     | Custom error message displayed if email validation fails.                                     | ❌       |
| `helperText`          | `string`                                     | Optional helper text displayed below the input.                                              | ❌       |
| `rows`                | `number`                                     | Number of rows for multiline input.                                                          | ❌       |
| `multiline`           | `boolean`                                    | If `true`, the input becomes a multiline text field.                                         | ❌       |
| `defaultValue`        | `string`                                     | Default value of the input field.                                                            | ❌       |
| `variant`             | `'outlined' | 'filled' | 'standard'`        | Material UI TextField variant.                                                               | ❌       |
| `customIconEye`       | `string`                                     | Custom CSS class for the show/hide password icon.                                             | ❌       |
| `onValueChange`       | `(idInput: string, value: string, isValid: boolean) => void` | Callback function triggered on input change. Returns value and validity.          | ❌       |

---

## Usage Example

```tsx
            <CustomInput
                idInput="email"
                title="Email"
                typeInput="email"
                placeholder="Enter your email"
                required={true}
                errorEmail="Please enter a valid email"
                helperText="We will never share your email."
                variant="outlined"
                onValueChange={handleInputChange}
            />

            <CustomInput
                idInput="password"
                title="Password"
                typeInput="password"
                placeholder="Enter your password"
                required={true}
                customIconEye="my-eye-icon"
                variant="outlined"
                onValueChange={handleInputChange}
            />
