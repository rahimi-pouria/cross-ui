# CustomCard – React Native Version

## 🧩 Description  
The **CustomCard** component is a flexible UI block that combines a title, image, description text, and a customizable button.  
It’s built using **@rneui/themed** for smooth styling and integrates seamlessly with the `CustomButton` component.

---

## ⚙️ Props  

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| **titleCard** | `string` | `''` | The title text displayed at the top of the card. |
| **description** | `string` | `''` | A short description or content inside the card. |
| **srcImage** | `string` | `''` | The image URL to be displayed in the card. |
| **title** | `string` | `''` | The text inside the button at the bottom of the card. |
| **color** | `string` | `'primary'` | Defines the button color (inherited from RNEUI theme). |
| **size** | `string` | `'md'` | Button size (e.g. `sm`, `md`, `lg`). |
| **onPress** | `() => void` | `undefined` | Function triggered when the button is pressed. |
| **nameIcon** | `string` | `''` | Icon name displayed beside the button title. |

---

## 🎯 Example Usage  

```tsx
import React from 'react';
import { View } from 'react-native';
import { CustomCard } from './components/CustomCard';

export const ExampleScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <CustomCard
        titleCard="Welcome to CrossUI"
        description="CrossUI makes React Native development easier and faster with ready-to-use components."
        srcImage="https://picsum.photos/1024/480/?image=25"
        title="VIEW MORE"
        color="secondary"
        size="md"
        nameIcon="arrow-right"
        onPress={() => alert('Card button clicked!')}
      />
    </View>
  );
};
