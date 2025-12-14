# CustomAlert – Element Plus Version

## Description
The **CustomAlert** component is a simple wrapper around `el-alert` in **Element Plus**.  
It allows you to create alerts with **custom color, icon, and timer** using props.

---

## Props

| Prop          | Type                                             | Default  | Description                                                      |
|---------------|-------------------------------------------------|----------|------------------------------------------------------------------|
| `id`          | `string`                                        | `''`     | Custom identifier for the alert                                   |
| `title`       | `string`                                        | `''`     | Main title of the alert                                           |
| `type`        | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` | Type of alert and its color (`success`, `warning`, `info`, `error`) |
| `effect`      | `'light' \| 'dark'`                             | `'light'`| Overall style of the alert (light or dark)                        |
| `showIcon`    | `boolean`                                       | `false`  | Whether to show an icon                                           |
| `description` | `string`                                        | `''`     | Additional description for the alert                              |
| `hideAfter`   | `number`                                        | `5000`   | Duration to display the alert in milliseconds                     |
| `closable`    | `boolean`                                       | `true`   | Whether to show the close button                                   |

---

## Usage Example

```vue
<custom-alert
  type="success"
  title="Operation Successful"
  description="This message indicates that the operation was successful"
  :hide-after="3000"
  showIcon
/>
