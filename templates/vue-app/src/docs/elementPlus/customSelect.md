# CustomSelect – Element Plus Version

## Description
The **CustomSelect** component provides a flexible select/dropdown field built on top of **Element Plus**.  
It supports `v-model` binding, validation using **Vuelidate**, single or multiple selection, clearable input, and customizable option labels.

---

## Props

| Prop                          | Type                                         | Default   | Description                                                                 |
|-------------------------------|---------------------------------------------|-----------|-----------------------------------------------------------------------------|
| `modelValue`                  | `string \| number \| Array<string \| number>` | `''`      | The value bound to the select via `v-model`.                                 |
| `label`                       | `string`                                    | `''`      | Label text displayed above the select box.                                  |
| `placeholder`                 | `string`                                    | `''`      | Placeholder text displayed inside the select.                                |
| `options`                     | `options[]`                                 | `[]`      | List of select options with `value` and `label`.                             |
| `required`                    | `boolean`                                   | `false`   | Marks the select as required for validation.                                 |
| `disabled`                    | `boolean`                                   | `false`   | Disables the select input.                                                  |
| `clearable`                   | `boolean`                                   | `false`   | Allows clearing the selected value.                                         |
| `multiple`                    | `boolean`                                   | `false`   | Allows multiple selections.                                                 |
| `collapseTags`                | `boolean`                                   | `false`   | Collapses multiple selected tags into a single line.                        |
| `customClassSelect`           | `string`                                    | `''`      | Custom class for the select wrapper.                                        |
| `customClassLabelSelect`      | `string`                                    | `''`      | Custom class for the option labels.                                         |
| `customValidationTitle`       | `string`                                    | `''`      | Custom title used in validation error messages.                             |

---

## Emits

| Event                 | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| `update:modelValue`   | Emitted when the selected value changes (for `v-model` support). |

---

## Types

```ts
export type options = {
  value: string
  label: string
}
