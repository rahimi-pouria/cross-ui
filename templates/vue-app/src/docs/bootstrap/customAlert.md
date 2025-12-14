# CustomAlert Component

`CustomAlert` is a Vue 3 wrapper component built with [BootstrapVue Next](https://github.com/bootstrap-vue/bootstrap-vue-next).  
It extends the native `BAlert` with TypeScript typings, slots, and additional customization options.

---

## ✨ Features
- Fully customizable Bootstrap alert with type-safe props
- Supports all Bootstrap variants for background, text, and close button
- Optional dismissible alerts
- Slot support for injecting custom content
- Control alert visibility with `v-model`

---

## 📦 Props

| Prop                   | Type                                                                                     | Default       | Description |
|------------------------|------------------------------------------------------------------------------------------|---------------|-------------|
| `modelValue`           | `boolean`                                                                                | `false`       | Controls visibility (`v-model`) |
| `bgVariant`            | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `undefined`   | Background color variant |
| `textVariant`          | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `undefined`   | Text color variant |
| `variant`              | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `undefined`   | General Bootstrap variant |
| `dismissible`          | `boolean`                                                                                | `false`       | If true, displays a close button |
| `closeLabel`           | `string`                                                                                 | `"Close"`     | ARIA label for close button |
| `closeContent`         | `string`                                                                                 | `"×"`         | Text or symbol for close button |
| `closeVariant`         | `string`                                                                                 | `undefined`   | Variant for the close button |
| `body`                 | `string`                                                                                 | `undefined`   | Body text inside the alert |
| `title`                | `string`                                                                                 | `undefined`   | Optional alert title |
| `headerTag`            | `string`                                                                                 | `"div"`       | HTML tag used for header |
| `headerClass`          | `string \| array \| object`                                                              | `undefined`   | CSS classes for the header |
| `bodyClass`            | `string \| array \| object`                                                              | `undefined`   | CSS classes for the body |
| `closeClass`           | `string \| array \| object`                                                              | `undefined`   | CSS classes for the close button |
| `id`                   | `string`                                                                                 | `undefined`   | Custom ID |
| `initialAnimation`     | `boolean`                                                                                | `false`       | Enables initial fade/slide animation |
| `noAnimation`          | `boolean`                                                                                | `false`       | Disable animations |
| `noFade`               | `boolean`                                                                                | `false`       | Disable fade transition |
| `lazy`                 | `boolean`                                                                                | `false`       | Lazy rendering |
| `unmountLazy`          | `boolean`                                                                                | `false`       | Unmount when hidden |
| `isStatus`             | `boolean`                                                                                | `false`       | Marks alert as a status element |
| `interval`             | `number`                                                                                 | `undefined`   | Auto-hide interval (ms) |
| `progressProps`        | `object`                                                                                 | `undefined`   | Progress bar properties for timed alerts |
| `show`                 | `boolean`                                                                                | `false`       | Control visibility manually |
| `showOnPause`          | `boolean`                                                                                | `false`       | Keeps alert visible while paused |
| `visible`              | `boolean`                                                                                | `false`       | Another visibility flag |
| `transProps`           | `object`                                                                                 | `undefined`   | Transition properties |

---

## 🧩 Slots

| Name           | Description |
|----------------|-------------|
| `customContent`| Custom slot for injecting your own markup inside the alert |

---

## 📘 Example Usage

```vue
<template>
  <CustomAlert
    v-model="isVisible"
    variant="danger"
    dismissible
    title="Error"
    body="Something went wrong!"
  >
    <template #customContent>
      <p>
        <strong>Custom HTML</strong> can also be placed here.
      </p>
    </template>
  </CustomAlert>
</template>

