# CustomModal – React Bootstrap Version

## Description
The **CustomModal** component is a flexible and reusable modal wrapper around **React Bootstrap’s `Modal`**.  
It includes **custom buttons**, **header**, **body**, **footer**, and supports both **default text content** and **custom children elements**.

---

## Props

| Prop                     | Type                                           | Default             | Description                                                                                  |
|---------------------------|-----------------------------------------------|-------------------|----------------------------------------------------------------------------------------------|
| `id`                      | `string`                                      | `''`               | Unique ID for the modal trigger button or modal itself.                                      |
| `titleBtn`                | `string`                                      | `'Open Modal'`     | Text displayed on the button that opens the modal.                                          |
| `variant`                 | `string`                                      | `'primary'`        | Bootstrap variant for the trigger button (`primary`, `secondary`, etc.).                   |
| `typeBtn`                 | `'button' \| 'submit' \| 'reset'`           | `'button'`         | Type of the trigger button.                                                                  |
| `size`                    | `'sm' \| 'lg'`                               | `undefined`        | Size of the trigger button.                                                                 |
| `active`                  | `boolean`                                     | `false`            | Whether the trigger button is active.                                                       |
| `disable`                 | `boolean`                                     | `false`            | Disable the trigger button if `true`.                                                      |
| `href`                    | `string`                                      | `''`               | Optional link for the trigger button.                                                      |
| `customClassBtn`          | `string`                                      | `''`               | Custom CSS class for the trigger button.                                                   |
| `title`                   | `string`                                      | `''`               | Modal header title.                                                                         |
| `description`             | `string`                                      | `''`               | Modal body text, used if `children` is not provided.                                       |
| `children`                | `ReactNode`                                   | `undefined`        | Custom content inside modal body. Overrides `description` if provided.                     |
| `customClassModalHeader`  | `string`                                      | `''`               | Custom CSS class for the modal header.                                                     |
| `customClassModalTitle`   | `string`                                      | `''`               | Custom CSS class for the modal title.                                                      |
| `customClassBodyModal`    | `string`                                      | `''`               | Custom CSS class for the modal body.                                                       |
| `customClassFooterModal`  | `string`                                      | `''`               | Custom CSS class for the modal footer.                                                     |
| `idBtnCloseModal`         | `string`                                      | `''`               | ID for the close button in the modal footer.                                               |
| `titleBtnCloseModal`      | `string`                                      | `'Close'`          | Text for the modal footer close button.                                                    |
| `variantBtnCloseModal`    | `string`                                      | `'secondary'`      | Bootstrap variant for the close button.                                                   |
| `sizeCloseBtnModal`       | `'sm' \| 'lg'`                               | `undefined`        | Size of the close button.                                                                  |
| `customClassCloseModal`   | `string`                                      | `''`               | Custom CSS class for the close button.                                                    |
| `idBtnSubmitModal`        | `string`                                      | `''`               | ID for the submit/confirm button in the modal footer.                                      |
| `titleBtnSubmitModal`     | `string`                                      | `'Save Changes'`   | Text for the submit button.                                                               |
| `variantBtnSubmitModal`   | `string`                                      | `'primary'`        | Bootstrap variant for the submit button.                                                  |
| `sizeSubmitBtnModal`      | `'sm' \| 'lg'`                               | `undefined`        | Size of the submit button.                                                                |
| `customClassSubmitModal`  | `string`                                      | `''`               | Custom CSS class for the submit button.                                                   |

---

## Features

✅ **Internal state management** for modal open/close using `useState`.  
✅ **Customizable buttons** for opening, closing, and submitting the modal.  
✅ **Support for custom content** via `children` or default `description`.  
✅ Fully **customizable CSS classes** for header, title, body, footer, and buttons.  
✅ Integrates seamlessly with **React Bootstrap**.

---

## Example Usage

```tsx
<CustomModal
      id="modal-example"
      titleBtn="Open Modal"
      title="Modal Title"
      description="This is a sample modal content"
      titleBtnCloseModal="Close"
      titleBtnSubmitModal="Save Changes"
      variant="primary"
      variantBtnCloseModal="secondary"
      variantBtnSubmitModal="success"
      customClassModalHeader="bg-light"
      customClassFooterModal="justify-content-between"
    />
