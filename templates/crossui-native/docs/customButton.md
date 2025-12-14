# 🔘 CustomButton

The `CustomButton` component is a flexible and reusable button built for React Native.  
It is based on **@rneui/themed**’s Button and supports icons, colors, radius, alignment, and loading states.

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `title` | `string` | `''` | The text displayed inside the button. |
| `type` | `'solid'` \| `'outline'` \| `'clear'` | `'solid'` | Defines the button style type. |
| `color` | `string` | `'primary'` | Sets the button color. |
| `radius` | `number` \| `'sm'` \| `'md'` \| `'lg'` | `'md'` | Controls the corner radius of the button. |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Sets the button size. |
| `align` | `'start'` \| `'center'` \| `'end'` | `'center'` | Aligns the button horizontally inside its container. |
| `name` | `string` | `''` | Icon name from React Native Elements. |
| `loading` | `boolean` | `false` | Displays a loading spinner when true. |
| `onPress` | `() => void` | `undefined` | Function triggered when the button is pressed. |

---

## ⚡ Events

| Event | Description |
|--------|--------------|
| `onPress` | Triggered when the button is pressed. |

---

## 🧩 Example

```tsx
import React from 'react';
import { View } from 'react-native';
import { CustomButton } from '@/components/CustomButton';

export default function Example() {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Primary Button */}
      <CustomButton
        title="Save"
        type="solid"
        color="blue"
        size="lg"
        onPress={handlePress}
        radius="md"
        name="save"
      />

      {/* Secondary Button */}
      <CustomButton
        title="Cancel"
        type="outline"
        color="gray"
        size="md"
        align="center"
        name="close"
      />
    </View>
  );
}
