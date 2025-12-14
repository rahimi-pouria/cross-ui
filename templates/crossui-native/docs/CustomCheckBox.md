# CustomCheckBox – React Native Version

## 🧩 Description  
The **CustomCheckBox** component is a wrapper around **@rneui/themed**’s `CheckBox`.  
It provides a simple and customizable checkbox with icons, colors, and label control — all through props.  
Perfect for forms, filters, and user selections.

---

## ⚙️ Props  

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| **title** | `string` | `''` | The label text displayed beside the checkbox. |
| **checked** | `boolean` | `false` | Determines whether the checkbox is selected. |
| **onPress** | `(event) => void` | `undefined` | Function triggered when the checkbox is pressed. |
| **iconType** | `'material-community' \| 'font-awesome' \| 'ionicon'` | `'material-community'` | The icon library used for the checkbox icons. |
| **checkedIcon** | `string` | `'checkbox-marked'` | Icon name for the checked state. |
| **uncheckedIcon** | `string` | `'checkbox-blank-outline'` | Icon name for the unchecked state. |
| **checkedColor** | `string` | `'blue'` | The color used when the checkbox is checked. |
| **size** | `number` | `28` | The icon size. |
| **center** | `boolean` | `false` | Centers the checkbox and label. |
| **checkedTitle** | `string` | `''` | Text shown when the checkbox is checked. |
| **disabled** | `boolean` | `false` | Disables the checkbox when `true`. |
| **iconRight** | `boolean` | `false` | Displays the icon on the right side of the label. |
| **right** | `boolean` | `false` | Positions the entire element to the right side. |
| **fontFamily** | `string` | `''` | Sets a custom font family for the label text. |

---

## 🎯 Example Usage  

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { CustomCheckBox } from './components/CustomCheckBox';

export const ExampleScreen = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <CustomCheckBox
        title="Accept Terms and Conditions"
        checked={checked}
        onPress={() => setChecked(!checked)}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checkedColor="green"
        fontFamily="Poppins-Medium"
        size={30}
      />
    </View>
  );
};
