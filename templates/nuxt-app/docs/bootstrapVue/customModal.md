# CustomModal Component

A Vue 3 modal component using **BootstrapVueNext** with a built-in trigger button (`CustomButton`). Supports full modal customization, slots, and reactive binding with `v-model`.

---

## Features

- Trigger modal with a button or programmatically.
- Customizable title, description, header, footer, and buttons.
- Two-way binding with `v-model` for modal visibility.
- Emits `ok` and `cancel` events for modal actions.
- Supports custom slots (`customDescription`) for modal content.
- Exposes `show()` and `hide()` methods for external control.
- Fully compatible with RTL and LTR layouts.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'showModal'` | Button label to trigger the modal. |
| `title` | `string` | `''` | Modal header title. |
| `titleClass` | `string` | `''` | CSS class for the modal title. |
| `description` | `string` | `''` | Default modal content if `customDescription` slot is not used. |
| `size` | `'sm' | 'md' | 'lg' | 'xl'` | `'md'` | Modal size. |
| `okTitle` | `string` | `'OK'` | Text for the OK button. |
| `okClass` | `string` | `''` | CSS class for the OK button. |
| `cancelTitle` | `string` | `'Cancel'` | Text for the cancel button. |
| `cancelClass` | `string` | `''` | CSS class for the Cancel button. |
| `centered` | `boolean` | `false` | Center modal vertically. |
| `scrollable` | `boolean` | `false` | Enable scrollable modal body. |
| `backdrop` | `boolean | string` | `true` | Enable modal backdrop. |
| `keyboard` | `boolean` | `true` | Close modal with ESC key. |
| `headerClass` | `string` | `''` | Custom CSS class for modal header. |
| `headerCloseClass` | `string` | `''` | Custom CSS class for header close button. |
| `bodyClass` | `string` | `''` | CSS class for modal body. |
| `contentClass` | `string` | `''` | CSS class for modal content wrapper. |
| `footerClass` | `string` | `''` | CSS class for modal footer. |
| `noHeader` | `boolean` | `false` | Hide modal header. |
| `noHeaderClose` | `boolean` | `false` | Hide header close button. |
| `noFooter` | `boolean` | `false` | Hide modal footer. |
| `buttonSize` | `'sm' | 'md' | 'lg'` | `'md'` | Size for modal buttons. |
| `bodyScrolling` | `boolean` | `false` | Enable scrolling inside modal body. |
| `modelValue` | `boolean` | `false` | Two-way binding for modal visibility. |

---

## Events

| Event | Description |
|-------|-------------|
| `update:modelValue` | Emits when modal is shown or hidden. |
| `ok` | Emits when OK button is clicked. |
| `cancel` | Emits when Cancel button is clicked. |

---

## Slots

| Slot | Description |
|------|-------------|
| `customDescription` | Custom modal content. If not provided, `description` prop is displayed. |

---

## Methods (Exposed)

| Method | Description |
|--------|-------------|
| `show()` | Programmatically opens the modal. |
| `hide()` | Programmatically closes the modal. |

---

## Example Usage

```vue
<CustomModal
  v-model="modalVisible"
  label="Open Modal"
  title="My Modal"
  description="This is the default description."
  ok-title="Confirm"
  cancel-title="Dismiss"
  size="lg"
  centered
  @ok="handleOk"
  @cancel="handleCancel"
/>
