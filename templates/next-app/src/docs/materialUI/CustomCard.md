# CustomCard – Material UI Version

## Description
The **CustomCard** component is a flexible and customizable card built with **React** and **Material UI**.  
It supports an image, title, description, and action buttons.  
You can fully control styling using custom CSS classes and integrate **CustomButton** for card actions.

---

## Props

| Prop Name                | Type                                           | Description                                                                                     | Required |
|---------------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------|----------|
| `title`                  | `string`                                      | Title displayed on the card.                                                                   | ✅       |
| `description`            | `string`                                      | Description text displayed below the title.                                                    | ✅       |
| `srcImage`               | `string`                                      | URL of the image displayed at the top of the card.                                             | ✅       |
| `titleBtn`               | `string`                                      | Text displayed on the card action button.                                                     | ❌       |
| `variant`                | `'contained' | 'outlined' | 'text'`         | Material UI button variant for the action button.                                             | ❌       |
| `onClick`                | `(event: React.MouseEvent<HTMLButtonElement>) => void` | Callback triggered when the action button is clicked.                                          | ❌       |
| `loading`                | `boolean`                                     | If `true`, shows loading state on the action button.                                          | ❌       |
| `loadingIndicator`       | `React.ReactNode`                             | Custom loading indicator for the action button.                                               | ❌       |
| `customClassWrapperCard` | `string`                                      | Custom CSS class applied to the main Card wrapper.                                            | ❌       |
| `customClassCardMedia`   | `string`                                      | Custom CSS class applied to the CardMedia element.                                            | ❌       |
| `contentCard`            | `string`                                      | Custom CSS class applied to CardContent.                                                     | ❌       |
| `customClassTypography`  | `string`                                      | Custom CSS class applied to Typography elements.                                             | ❌       |
| `customClassActions`     | `string`                                      | Custom CSS class applied to the CardActions wrapper.                                         | ❌       |
| `customClassBtn`         | `string`                                      | Custom CSS class applied to the action button (CustomButton).                                 | ❌       |
| `id`                     | `string`                                      | ID used for the action button.                                                                | ❌       |
| `size`                   | `'small' | 'medium' | 'large'`              | Size of the action button.                                                                    | ❌       |

---

## Usage Example

```tsx
        <CustomCard
            title="Beautiful Landscape"
            description="Explore the amazing landscapes around the world."
            srcImage="https://source.unsplash.com/random/400x200"
            titleBtn="Learn More"
            variant="contained"
            onClick={handleClick}
            customClassWrapperCard="my-card-wrapper"
            customClassCardMedia="my-card-media"
            contentCard="my-card-content"
            customClassTypography="my-card-typography"
            customClassActions="my-card-actions"
            customClassBtn="my-card-btn"
        />
