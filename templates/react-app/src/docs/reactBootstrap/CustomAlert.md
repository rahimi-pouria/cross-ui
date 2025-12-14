# CustomAlert – React-Bootstrap Version

## Description
The **CustomAlert** component is a wrapper around React-Bootstrap’s `Alert` with added flexibility.  
It supports dismissible alerts, custom descriptions, child content, and an optional **action button** (using `CustomButton`).

---

## Props

| Prop                    | Type       | Default   | Description                                                                 |
|-------------------------|------------|-----------|-----------------------------------------------------------------------------|
| `variant`               | `string`   | `'primary'` | Defines the alert style variant (`primary`, `success`, `danger`, etc.).    |
| `description`           | `string`   | `''`      | Text content inside the alert (used if `children` is not provided).        |
| `customClassDescription`| `string`   | `''`      | Custom CSS class for the alert description.                                |
| `children`              | `ReactNode`| `null`    | Custom content to replace the default description.                         |
| `showBtn`               | `ReactNode`| `null`    | Allows passing a custom button element. If not provided, a `CustomButton` is rendered. |
| `titleBtn`              | `string`   | `''`      | The text label for the default action button.                              |
| `variantBtn`            | `string`   | Matches `variant` | Variant style for the button if rendered.                          |
| `customClassBtn`        | `string`   | `''`      | Custom CSS class for the button.                                           |
| `id`                    | `string`   | `''`      | HTML id for the button element.                                            |
| `href`                  | `string`   | `''`      | Link for the button (if used as an anchor).                                |
| `typeBtn`               | `string`   | `'button'` | The button type (`button`, `submit`, `reset`).                            |
| `size`                  | `string`   | `''`      | Size of the button (`sm`, `lg`, etc.).                                     |
| `active`                | `boolean`  | `false`   | Whether the button is active.                                              |
| `disable`               | `boolean`  | `false`   | Disable state for the button.                                              |

---

## Events

| Event       | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `onClose`   | Triggered when the alert is dismissed (either by close button or programmatically). |
| `onClick`   | Triggered when the default action button is clicked.                        |

---

## Example Usage

```tsx
 {/* Basic Alert */}
      <CustomAlert
        variant="success"
        description="Your changes have been saved successfully!"
        titleBtn="Close"
      />

      {/* Alert with Custom Child */}
      <CustomAlert variant="danger">
        <div>
          <strong>Error:</strong> Something went wrong. Please try again.
        </div>
      </CustomAlert>

      {/* Alert with Custom Button */}
      <CustomAlert variant="warning" description="Your session will expire soon.">
        {{
          showBtn: (
            <button className="btn btn-dark">Extend Session</button>
          )
        }}
      </CustomAlert>
