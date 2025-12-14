# CustomCard – React-Bootstrap Version

## Description
The **CustomCard** component is a wrapper around React-Bootstrap’s `Card`.  
It allows you to create **customizable cards** with header, footer, image, body content, and optional button integration using the `CustomButton` component.

---

## Props

| Prop                   | Type       | Default    | Description                                                                 |
|------------------------|------------|------------|-----------------------------------------------------------------------------|
| `customClassCard`      | `string`   | `''`       | Custom CSS classes for the main Card wrapper.                              |
| `titleHeaderCard`      | `string`   | `''`       | Text to display in the card header.                                        |
| `customClassHeaderCard`| `string`   | `''`       | Custom CSS classes for the header.                                         |
| `srcImg`               | `string`   | `''`       | The image source URL for the card.                                         |
| `variantImg`           | `string`   | `'top'`    | Image variant (`top` or `bottom`).                                         |
| `customClassImgCard`   | `string`   | `''`       | Custom CSS classes for the card image.                                     |
| `customClassCardBody`  | `string`   | `''`       | Custom CSS classes for the card body.                                      |
| `title`                | `string`   | `''`       | Title displayed inside the card body.                                      |
| `customClassCardTitle` | `string`   | `''`       | Custom CSS classes for the card title.                                     |
| `description`          | `string`   | `''`       | Description text shown in the card body.                                   |
| `customClassCardText`  | `string`   | `''`       | Custom CSS classes for the card text.                                      |
| `children`             | `ReactNode`| `undefined`| Slot for injecting custom content (e.g., ListGroup, extra components).     |
| `showBtn`              | `boolean`  | `false`    | Whether to display the button inside the card body.                        |
| `id`                   | `string`   | `''`       | Button id (forwarded to `CustomButton`).                                   |
| `titleBtn`             | `string`   | `''`       | Text for the card button.                                                  |
| `variant`              | `string`   | `'primary'`| Button variant (`primary`, `secondary`, etc.).                             |
| `typeBtn`              | `string`   | `'button'` | Button type (`button`, `submit`, `reset`).                                 |
| `size`                 | `string`   | `''`       | Button size (`sm`, `lg`, etc.).                                            |
| `disable`              | `boolean`  | `false`    | Disables the button when `true`.                                           |
| `href`                 | `string`   | `''`       | Optional link for the button.                                              |
| `customClassBtn`       | `string`   | `''`       | Custom CSS classes for the button.                                         |
| `active`               | `boolean`  | `false`    | Sets the button active state.                                              |
| `titleFooterCard`      | `string`   | `''`       | Text to display in the card footer.                                        |
| `customClassFooter`    | `string`   | `''`       | Custom CSS classes for the footer.                                         |

---

## Slots

| Slot Name   | Description                                       |
|-------------|---------------------------------------------------|
| `children`  | Inject custom content inside the card body.       |

---

## Example Usage

```tsx
      {/* Card with Button */}
      <CustomCard
        titleHeaderCard="Featured"
        srcImg="https://via.placeholder.com/300x200"
        title="Card Title"
        description="This is a description inside the custom card."
        showBtn={true}
        titleBtn="Learn More"
        variant="success"
        size="lg"
        customClassCard="shadow-lg"
        customClassCardBody="p-3"
      />

      {/* Card without Button */}
      <CustomCard
        title="Simple Card"
        description="Just a card without a button."
      />
