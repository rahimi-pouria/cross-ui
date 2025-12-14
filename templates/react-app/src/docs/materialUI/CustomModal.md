# CustomModal – Material UI Version

## Description
The **CustomModal** component is a fully customizable modal built with **React** and **Material UI**.  
It can be opened via a **CustomButton** and supports dynamic content using `children` or a default `descriptionModal`.  
You can customize the modal width, title, description, and button properties.

---

## Props

| Prop Name                | Type                                      | Description                                                                                     | Required |
|---------------------------|-------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `title`                  | `string`                                   | Text displayed on the button that opens the modal.                                             | ✅       |
| `titleModal`             | `string`                                   | Title displayed inside the modal header.                                                       | ❌       |
| `descriptionModal`       | `string`                                   | Default description shown inside the modal if `children` is not provided.                      | ❌       |
| `customWidthModal`       | `number`                                   | Custom width of the modal in pixels.                                                          | ❌       |
| `idModalTitle`           | `string`                                   | ID for the modal title element. Useful for accessibility.                                      | ❌       |
| `idModalDescription`     | `string`                                   | ID for the modal description element.                                                         | ❌       |
| `customClassTitleModal`  | `string`                                   | Custom CSS class for the modal title.                                                         | ❌       |
| `customClassDescriptionModal` | `string`                              | Custom CSS class for the modal description.                                                   | ❌       |
| `children`               | `React.ReactNode`                          | Custom content to render inside the modal. Overrides `descriptionModal` if provided.         | ❌       |
| `customClassBtn`         | `string`                                   | Custom CSS class for the opening button.                                                      | ❌       |
| `variant`                | `'text' | 'outlined' | 'contained'`      | Material UI button variant.                                                                   | ❌       |
| `idBtn`                  | `string`                                   | ID for the opening button.                                                                    | ❌       |
| `loading`                | `boolean`                                  | If `true`, the opening button will display a loading state.                                   | ❌       |
| `loadingIndicator`       | `React.ReactNode`                          | Custom indicator displayed when `loading` is `true`.                                         | ❌       |
| `size`                   | `'small' | 'medium' | 'large'`            | Size of the opening button.                                                                   | ❌       |
| `sizCloseBtn`            | `'small' | 'medium' | 'large'`            | Size of the close button inside the modal.                                                    | ❌       |

---

## Usage Example

```tsx
        <CustomModal
            title="Open Modal"
            titleModal="Modal Header"
            descriptionModal="This is the default modal content."
            customWidthModal={500}
            customClassTitleModal="modal-title"
            customClassDescriptionModal="modal-description"
            idModalTitle="modal-title-1"
            idModalDescription="modal-desc-1"
            variant="contained"
            size="medium"
        >
            <p>This is custom content inside the modal!</p>
        </CustomModal>
