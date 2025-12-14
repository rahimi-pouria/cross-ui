import { CheckBox } from '@rneui/themed';
import { CustomCheckBoxProps } from "../Props/CustomCheckBox";

export const CustomCheckBox = (props: CustomCheckBoxProps) => {
  return (
    <CheckBox
      title={props.title}
      checked={props.checked}
      onPress={props.onPress}
      iconType={props.iconType}
      checkedIcon={props.checkedIcon}
      uncheckedIcon={props.uncheckedIcon}
      checkedColor={props.checkedColor || 'blue'}
      size={props.size || 28}
      center={props.center}
      checkedTitle={props.checkedTitle}
      disabled={props.disabled}
      iconRight={props.iconRight}
      right={props.right}
      textStyle={{ fontFamily: props.fontFamily }}
      containerStyle={{ backgroundColor: 'transparent' }}
    />
  );
};
