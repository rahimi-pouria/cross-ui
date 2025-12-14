# CustomSelect – Vue 3 + BootstrapVueNext

## Description

A fully reactive select component built with **Vue 3** and **BootstrapVueNext's `BFormSelect`**.  
Supports dynamic options, multiple selection, translation via **vue-i18n**, and customizable styling.  
Ideal for forms where options are fetched or dynamically generated.

---

## Props

| Prop Name         | Type                        | Required | Default        | Description                                                                 |
|-------------------|-----------------------------|----------|----------------|-----------------------------------------------------------------------------|
| `id`              | `string`                    | No       | `undefined`    | HTML id attribute for the select element.                                   |
| `modelValue`      | `any`                       | No       | `undefined`    | v-model binding value.                                                      |
| `customClass`     | `string \| Array \| Object` | No       | `''`           | Custom CSS classes for the select element.                                  |
| `ariaInvalid`     | `boolean`                   | No       | `false`        | Sets `aria-invalid` for accessibility.                                      |
| `autofocus`       | `boolean`                   | No       | `false`        | Focuses the select element on mount.                                        |
| `disabled`        | `boolean`                   | No       | `false`        | Disables the select completely.                                             |
| `disabledField`   | `string`                    | No       | `'disabled'`   | Field in option objects that determines if the option is disabled.         |
| `form`            | `string`                    | No       | `undefined`    | Form ID that the select belongs to.                                         |
| `labelField`      | `string`                    | No       | `'label'`      | Field in option objects used as the display label.                          |
| `multiple`        | `boolean`                   | No       | `false`        | Enables multiple selection.                                                 |
| `name`            | `string`                    | No       | `undefined`    | Name attribute for the select element.                                      |
| `optionsField`    | `string`                    | No       | `'options'`    | Field in props that contains the array of options.                          |
| `plain`           | `boolean`                   | No       | `false`        | Renders a plain select without Bootstrap styling.                            |
| `required`        | `boolean`                   | No       | `false`        | Marks the select as required.                                               |
| `selectSize`      | `number`                    | No       | `undefined`    | Size of the select for multiple visible options.                             |
| `size`            | `'sm' | 'lg'`               | No       | `undefined`    | Bootstrap size variant.                                                     |
| `state`           | `boolean \| null`           | No       | `null`         | Validation state (`true`=valid, `false`=invalid, `null`=neutral).          |
| `textField`       | `string`                    | No       | `'text'`       | Field in option objects used for option text.                                |
| `valueField`      | `string`                    | No       | `'value'`      | Field in option objects used for option value.                               |
| `firstTitle`      | `string`                    | No       | `undefined`    | Optional first placeholder option at the top.                                |
| `options`         | `Array<{ value: any, name: string, notEnabled: boolean }>` | No | `[]` | Array of selectable options. `notEnabled` disables the option.             |

---

## Events

| Event             | Description                                               |
|------------------|-----------------------------------------------------------|
| `update:modelValue` | Emits whenever the selected value changes.             |

---

## Slots

| Slot             | Description                                               |
|-----------------|-----------------------------------------------------------|
| `first`          | Slot for the first option (used when `firstTitle` is set). |
| `default`        | Default slot for rendering custom options.                |


