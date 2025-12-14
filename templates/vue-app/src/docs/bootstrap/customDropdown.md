# CustomDropdown Component

`CustomDropdown` is a custom Vue 3 component built on top of [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It provides a flexible and type-safe way to render dropdown menus with dynamic items.

---

## ✨ Features
- Render a dropdown menu with dynamic items
- Supports all **Bootstrap variants**
- Each item can optionally navigate using `router-link`
- Fully customizable through props

---

## 📦 Props

| Prop              | Type                                                                                          | Default              | Description |
|-------------------|-----------------------------------------------------------------------------------------------|----------------------|-------------|
| `dropdownItem`    | `dropdownItem[]`                                                                              | **required**         | List of items to render in the dropdown |
| `text`            | `string`                                                                                      | **required**         | The initial text shown on the dropdown button |
| `variant`         | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark' \| 'link'` | `primary` | Defines the Bootstrap button style |
| `ariaLabel`       | `string`                                                                                      | `undefined`          | ARIA label for accessibility |
| `autoClose`       | `boolean \| string`                                                                           | `true`               | Controls auto-closing behavior |
| `boundary`        | `string`                                                                                      | `clippingAncestors`  | Sets the boundary for rendering the menu |
| `boundaryPadding` | `number \| string`                                                                            | `undefined`          | Padding between dropdown and boundary |
| `disabled`        | `boolean`                                                                                     | `false`              | Disables the dropdown button |
| `icon`            | `boolean`                                                                                     | `false`              | Display an icon (if supported) |
| `id`              | `string`                                                                                      | `undefined`          | Custom ID |
| `initialAnimation`| `boolean`                                                                                     | `false`              | Enables initial animation |
| `isNav`           | `boolean`                                                                                     | `false`              | Use inside navigation menus |
| `lazy`            | `boolean`                                                                                     | `false`              | Lazy-load menu content |
| `menuClass`       | `string \| object \| array`                                                                   | `undefined`          | Custom classes for the dropdown menu |
| `modelValue`      | `boolean`                                                                                     | `false`              | Controls visibility via `v-model` |
| `noAnimation`     | `boolean`                                                                                     | `false`              | Disables animations |
| `noCaret`         | `boolean`                                                                                     | `false`              | Hides the caret indicator |
| `placement`       | `string`                                                                                      | `bottom-start`       | Dropdown placement |
| `role`            | `string`                                                                                      | `menu`               | Accessibility role |
| `show`            | `boolean`                                                                                     | `false`              | Show dropdown initially |
| `size`            | `'sm' \| 'md' \| 'lg'`                                                                        | `md`                 | Dropdown button size |
| `split`           | `boolean`                                                                                     | `false`              | Enables split button |
| `toggleText`      | `string`                                                                                      | `Toggle dropdown`    | Text for the toggle button |
| `visible`         | `boolean`                                                                                     | `false`              | Controls dropdown visibility |
| `wrapperClass`    | `string \| object \| array`                                                                   | `undefined`          | Classes applied to the wrapper |

---

## 🧩 Type Definitions

```ts
export type dropdownItem = {
  value: string,
  name: string,
  link: string
}
