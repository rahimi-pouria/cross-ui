# CustomButton – Element Plus Version

## Description
The **CustomButton** component is a reusable button built on top of **Element Plus**.  
It supports both **standard buttons** and **router links**, while keeping all native Element Plus features.  
It also allows advanced customization with props, events, and slots for maximum flexibility.

---

## Props

| Prop                | Type                                                                 | Default     | Description                                                                 |
|---------------------|----------------------------------------------------------------------|-------------|-----------------------------------------------------------------------------|
| `id`                | `string`                                                             | `''`        | Unique identifier for the button.                                           |
| `titleBtn`          | `string`                                                             | `''`        | Default button label (used if no slot content is provided).                  |
| `type`              | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | `'primary'` | Element Plus button style type.                                             |
| `nativeType`        | `'button' \| 'submit' \| 'reset'`                                    | `'button'`  | Native HTML button type.                                                     |
| `modelValue`        | `string \| number \| boolean \| object \| any[]`                     | `null`      | Reactive value for two-way binding.                                         |
| `hrefBtn`           | `string`                                                             | `''`        | If provided, the button will be wrapped inside a `router-link`.              |
| `customClassBtn`    | `string`                                                             | `''`        | Custom CSS classes for styling the button.                                   |
| `ariaControls`      | `string`                                                             | `''`        | Sets `aria-controls` attribute for accessibility.                            |
| `dataAccordionTarget` | `string`                                                           | `''`        | Target for accordion functionality (if used).                               |
| `dataModalTarget`   | `string \| undefined`                                                | `undefined` | Target modal to open.                                                       |
| `ariaExpanded`      | `boolean`                                                            | `false`     | Defines whether the button is in expanded state.                            |
| `dataModalHide`     | `string \| undefined`                                                | `undefined` | Target modal to hide.                                                       |
| `ariaLabel`         | `string`                                                             | `''`        | Accessibility label for the button.                                         |
| `dataDropdownToggle`| `string \| undefined`                                                | `undefined` | Target dropdown to toggle.                                                  |
| `dataModalToggle`   | `string \| undefined`                                                | `undefined` | Target modal to toggle.                                                     |
| `dataDismissTarget` | `string \| undefined`                                                | `undefined` | Target element to dismiss.                                                  |

---

## Events

| Event                 | Payload | Description                                    |
|------------------------|---------|------------------------------------------------|
| `click`               | `any`   | Emitted when the button is clicked.            |
| `update:modelValue`   | `any`   | Emits the updated `modelValue` reactively.     |

---

## Slots

| Slot         | Description                                |
|--------------|--------------------------------------------|
| `customBody` | Custom content inside the button (text, icons, etc.). |

---

## Usage Examples

### Basic Button
```vue
<custom-button title-btn="Submit" type="primary" native-type="submit" />

If hrefBtn is set, the button is wrapped inside a router-link.

You can style the button using customClassBtn.

This component extends the functionality of Element Plus Button while keeping all native props available.

Example button
<custom-button type="success">
  <template #customBody>
    <i class="el-icon-check"></i> Confirm
  </template>
</custom-button>

Example router link

<custom-button href-btn="/dashboard" type="info" title-btn="Go to Dashboard" />


