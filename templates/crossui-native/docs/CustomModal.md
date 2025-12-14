# CustomModal – React Native Version

## Description
The `CustomModal` component is a wrapper around `@rneui/themed`’s `Dialog`.  
It provides an easy way to display modals with a customizable title, description, children content, and a close button.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `''` | The text displayed on the trigger button that opens the modal. |
| `isVisible` | `boolean` | `false` | Controls the visibility of the modal. |
| `onPress` | `() => void` | `undefined` | Function triggered when the trigger button is pressed. |
| `onBackdropPress` | `(event: GestureResponderEvent) => void` | `undefined` | Function triggered when the backdrop is pressed. |
| `titleModal` | `string` | `''` | The title text inside the modal. |
| `descriptionModal` | `string` | `''` | The description text inside the modal. |
| `styleModal` | `object` | `{}` | Custom styles for the modal container and title. |
| `onPressCloseIcon` | `() => void` | `undefined` | Function triggered when the close icon button is pressed. |
| `children` | `React.ReactNode` | `undefined` | Any custom content to render inside the modal. |

---

## Example Usage

```tsx
<CustomModal
  title="Open Modal"
  isVisible={modalVisible}
  onPress={() => setModalVisible(true)}
  onBackdropPress={() => setModalVisible(false)}
  titleModal="Modal Title"
  descriptionModal="This is a description inside the modal."
  onPressCloseIcon={() => setModalVisible(false)}
  styleModal={{
    container: { backgroundColor: '#f0f0f0', padding: 20 },
    title: { color: 'black', fontSize: 20, fontWeight: 'bold' }
  }}
>
  {/* You can add any children here */}
  <Text>Additional content inside the modal.</Text>
  <CustomButton
    title="Another Button"
    onPress={() => alert('Clicked inside modal')}
  />
</CustomModal>
