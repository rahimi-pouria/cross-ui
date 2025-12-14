# CustomInput – Element Plus Version

## Description
The **CustomInput** component provides a flexible input field built on top of **Element Plus**.  
It supports `v-model` binding, validation using **Vuelidate**, clearable input, and a password toggle with a visibility icon.

---

## Props

| Prop                     | Type                                                                 | Default   | Description                                                                 |
|--------------------------|----------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------|
| `modelValue`             | `string \| number \| Array<string \| number>`                        | `''`      | The value bound to the input via `v-model`.                                 |
| `label`                  | `string`                                                             | `''`      | Label text displayed above the input.                                       |
| `placeholder`            | `string`                                                             | `''`      | Placeholder text inside the input.                                          |
| `required`               | `boolean`                                                            | `false`   | Marks the input as required.                                               |
| `clearable`              | `boolean`                                                            | `false`   | Displays a clear button inside the input.                                   |
| `disabled`               | `boolean`                                                            | `false`   | Disables the input.                                                        |
| `inputType`              | `string`                                                             | `'text'`  | Type of input (`text`, `password`, etc.).                                   |
| `customClassWrapperInput`| `string`                                                             | `''`      | Custom class for the input wrapper.                                         |
| `labelClass`             | `string`                                                             | `''`      | Custom class for the label.                                                |

---

## Emits

| Event                    | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `update:modelValue`      | Emitted when the input value changes.                                        |

---

## Usage Example

```vue
<CustomInput
  v-model="password"
  label="Password"
  placeholder="Enter your password"
  required
  inputType="password"
  clearable
/>
