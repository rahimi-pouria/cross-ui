# CustomChip – React Native Elements Version

## Description
The `CustomChip` component is a wrapper around React Native Elements’ `Chip`.  
It provides an easy way to render chips with customizable types, gradients, and styles.

---

## Props

| Prop                | Type                                    | Default      | Description |
|---------------------|----------------------------------------|--------------|-------------|
| title               | string                                  | ''           | The text displayed inside the chip. |
| type                | 'solid' \| 'outline' \| 'clear'       | 'solid'      | Defines the chip style type. |
| containerStyle      | object                                  | {}           | Custom styles applied to the chip container. |
| ViewComponent       | React Component                         | View         | Component used for the chip background (use `LinearGradient` for gradients). |
| linearGradientProps | object                                  | undefined    | Props passed to the gradient when using `ViewComponent={LinearGradient}`. |

---

## Example Usage

```tsx
import { LinearGradient } from 'expo-linear-gradient';
import { CustomChip } from './components/CustomChip';

// Solid Chip
<CustomChip
  title="Default Chip"
  type="solid"
/>

// Outline Chip
<CustomChip
  title="Outline Chip"
  type="outline"
/>

// Gradient Chip
<CustomChip
  title="Gradient Chip"
  ViewComponent={LinearGradient}
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  containerStyle={{ marginVertical: 15 }}
/>
