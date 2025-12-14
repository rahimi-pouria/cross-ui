# CustomButton – React-Bootstrap Version

## Description
The **CustomButton** component is a wrapper around React-Bootstrap’s `Button`.  
It provides an easy way to render buttons with **custom types, variants, sizes, classes, and event handling**.

---

## Props

| Prop              | Type        | Default    | Description                                                                |
|-------------------|-------------|------------|----------------------------------------------------------------------------|
| `titleBtn`        | `string`    | `''`       | The text displayed inside the button.                                     |
| `typeBtn`         | `string`    | `'button'` | The button type (`button`, `submit`, `reset`).                            |
| `variant`         | `string`    | `'primary'`| Defines the button style variant (`primary`, `secondary`, `success`, etc.).|
| `size`            | `string`    | `''`       | Size of the button (`sm`, `lg`, etc.).                                    |
| `customClassBtn`  | `string`    | `''`       | Custom CSS classes applied to the button.                                 |
| `onClick`         | `() => void`| `undefined`| Function triggered when the button is clicked.                            |

---

## Events

| Event     | Description                         |
|-----------|-------------------------------------|
| `onClick` | Emitted when the button is clicked. |

---

## Example Usage

```tsx
  {/* Primary Button */}
      <CustomButton
        titleBtn="Save"0
        typeBtn="submit"
        variant="primary"
        size="lg"
        onClick={handleClick}
      />

      {/* Secondary Button with Custom Class */}
      <CustomButton
        titleBtn="Cancel"
        variant="secondary"
        customClassBtn="mx-2"
      />
