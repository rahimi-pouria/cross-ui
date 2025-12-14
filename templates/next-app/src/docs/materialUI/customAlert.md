# CustomAlert – Material UI Version

## Description
The **CustomAlert** component is a fully customizable alert built with **React** and **Material UI**.  
It supports custom CSS classes, a close button, optional action buttons, and controlled visibility.  
You can pass `children` to render custom content or rely on the `description` prop for default content.

---

## Props

| Prop Name                       | Type                                                                 | Description                                                                                     | Required |
|---------------------------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `severity`                       | `'error' | 'warning' | 'info' | 'success'`                          | Determines the alert type and color.                                                          | ✅       |
| `title`                          | `string`                                                              | The main title text displayed inside the alert.                                                | ✅       |
| `description`                    | `string`                                                              | Default content shown inside the alert if `children` is not provided.                           | ❌       |
| `children`                       | `React.ReactNode`                                                     | Custom content to render inside the alert. Overrides `description` if provided.                | ❌       |
| `showBtn`                        | `boolean`                                                             | Determines whether a button is displayed inside the alert.                                     | ❌       |
| `titleBtn`                       | `string`                                                              | Text displayed on the optional button.                                                         | ❌       |
| `onClick`                        | `(event: React.MouseEvent<HTMLButtonElement>) => void`               | Callback function triggered when the button is clicked.                                        | ❌       |
| `idBtn`                          | `string`                                                              | Unique ID for the button.                                                                     | ❌       |
| `loading`                        | `boolean`                                                             | Indicates whether the button should display a loading state.                                   | ❌       |
| `loadingIndicator`                | `React.ReactNode`                                                     | Custom loading indicator to display when `loading` is true.                                     | ❌       |
| `variant`                        | `'contained' | 'outlined' | 'text'`                                  | Material UI button variant for the optional button.                                            | ❌       |
| `customClassWrapperDescription`  | `string`                                                              | Custom CSS class applied to the description wrapper.                                           | ❌       |
| `customClassWrapperBtn`          | `string`                                                              | Custom CSS class applied to the button wrapper.                                                | ❌       |
| `customClassBtn`                 | `string`                                                              | Custom CSS class applied to the button itself.                                                 | ❌       |

---

## Usage Example

```tsx
            <CustomAlert
                severity="success"
                title="Operation Successful"
                description="Your data has been saved successfully."
                showBtn={true}
                titleBtn="Undo"
                onClick={handleClick}
                variant="contained"
                customClassWrapperDescription="alert-description"
                customClassWrapperBtn="alert-btn-wrapper"
                customClassBtn="alert-btn"
                idBtn="undo-button"
            />
            
            <CustomAlert
                severity="error"
                title="Operation Failed"
            >
                <p>Custom content can be placed here instead of description.</p>
            </CustomAlert>

export default Example;
