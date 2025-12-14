# InputWithEyeIcon Component

A Vue 3 input component with built-in password visibility toggle and validation support using **Vuelidate**. This component works with `BootstrapVueNext` and `Bootstrap Icons`.

---

## Features

- Supports text, email, and password input types.
- Password visibility toggle with eye/eye-slash icons.
- Built-in validation with `Vuelidate`.
- Fully supports RTL and LTR layouts.
- Customizable classes for input, label, and icon.
- Supports dynamic error messages.
- Works with `custom-button` for the toggle icon.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `customClass` | `string \| Array \| Object` | `''` | Wrapper container custom class. |
| `title` | `string` | `undefined` | Label text for the input. |
| `titleToolTip` | `string` | `undefined` | Tooltip for the input. |
| `inputType` | `'text' | 'password' | 'email'` | `'text'` | Type of the input field. |
| `modelValue` | `string` | `''` | v-model for the input. |
| `required` | `boolean` | `false` | Marks the input as required. |
| `requiredIf` | `boolean` | `false` | Conditionally required field. |
| `disabled` | `boolean` | `false` | Disables the input. |
| `minLength` | `number` | `undefined` | Minimum character length for input. |
| `betweenValue` | `[number, number]` | `undefined` | Minimum and maximum numeric range. |
| `regex` | `string` | `undefined` | Regex pattern for custom validation. |
| `maximumFractalDigits` | `number` | `undefined` | Maximum digits after decimal point. |
| `canShowPassword` | `boolean` | `true` | Enables the eye icon for password fields. |
| `inputClass` | `string \| Array \| Object` | `''` | Additional class for the input field. |
| `labelClass` | `string \| Array \| Object` | `''` | Class for the input label. |
| `errorMandatory` | `string` | `'This field is required'` | Custom error message for required validation. |

---

## Events

| Event | Description |
|-------|-------------|
| `update:modelValue` | Emits when the input value changes. |
| `keyup` | Emits the native keyup event from the input. |

---

## Slots

| Slot | Description |
|------|-------------|
| `default` | Default slot is not used, all content is built-in. |

---

## Usage Example

```vue

