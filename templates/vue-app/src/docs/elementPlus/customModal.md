# CustomModal – Element Plus Version

## Description
The **CustomModal** component provides a flexible modal dialog built on top of **Element Plus**.  
It uses the **CustomButton** component as the trigger button and supports slots for custom modal content as well as footer buttons.  
The modal supports open/close events, dynamic title, custom width, and two configurable action buttons.

---

## Props

| Prop                          | Type                | Default   | Description                                                              |
|-------------------------------|-------------------|-----------|--------------------------------------------------------------------------|
| `modelValue`                  | `boolean`          | `false`   | Controls the visibility of the modal (v-model).                          |
| `titleModal`                  | `string`           | `''`      | The title text of the modal.                                             |
| `description`                 | `string`           | `''`      | The default description/content of the modal. Can be overridden via slot.|
| `customWithModal`             | `string`           | `'50%'`   | Width of the modal.                                                      |
| `customClassDescriptionModal` | `string`           | `''`      | Custom class for the modal content wrapper.                               |
| `customClassFooterModal`      | `string`           | `''`      | Custom class for the modal footer container.                             |
| `titleBtnShowModal`           | `string`           | `'Open'`  | Text of the button that triggers opening the modal.                      |
| `typeBtnCancel`               | `string`           | `'default'` | Type of the cancel button.                                               |
| `titleBtnCancel`              | `string`           | `'Cancel'`| Text of the cancel button.                                               |
| `typeBtnConfirm`              | `string`           | `'primary'` | Type of the confirm button.                                              |
| `titleBtnConfirm`             | `string`           | `'Confirm'` | Text of the confirm button.                                              |

---

## Emits

| Event                          | Description                                                        |
|--------------------------------|--------------------------------------------------------------------|
| `click`                        | Emitted when the confirm button is clicked.                        |
| `updateModelValue`             | Emitted when the modal visibility changes (for v-model support).  |

---

## Slots

| Slot Name           | Description                                                             |
|--------------------|-------------------------------------------------------------------------|
| `customBodyModal`  | Optional slot for custom content inside the modal body. Defaults to `description` prop. |
| `footer`           | Optional slot for custom footer buttons. Defaults to confirm/cancel buttons. |

---

## Usage Example

```vue
<CustomModal
  v-model="isModalVisible"
  titleModal="Example Modal"
  description="This is the default modal description."
  titleBtnShowModal="Show Modal"
  titleBtnCancel="Close"
  titleBtnConfirm="Submit"
  :customWithModal="'40%'"
/>
