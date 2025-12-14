# CustomButton – Material UI Version

## Description
The **CustomButton** component is a fully customizable button built with **React** and **Material UI**.  
It supports different variants, loading states, custom CSS classes, and click handlers.  
You can also provide a custom loading indicator for better UX during asynchronous actions.

---

## Props

| Prop Name            | Type                                           | Description                                                                                     | Required |
|----------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `title`              | `string`                                      | Text displayed inside the button.                                                              | ✅       |
| `variant`            | `'contained' | 'outlined' | 'text'`         | Material UI button variant.                                                                    | ✅       |
| `onClick`            | `(event: React.MouseEvent<HTMLButtonElement>) => void` | Callback function triggered when the button is clicked.                                        | ❌       |
| `loading`            | `boolean`                                     | If `true`, the button shows a loading state.                                                  | ❌       |
| `loadingIndicator`    | `React.ReactNode`                             | Custom loading indicator to display when `loading` is `true`.                                   | ❌       |
| `customClassBtn`      | `string`                                      | Custom CSS class applied to the button for styling.                                            | ❌       |

---

## Usage Example

```tsx
            <CustomButton
                title="Submit"
                variant="contained"
                onClick={handleClick}
                customClassBtn="my-custom-btn"
            />

            <CustomButton
                title="Loading Button"
                variant="outlined"
                loading={true}
                loadingIndicator={<span>Loading...</span>}
                customClassBtn="my-loading-btn"
            />