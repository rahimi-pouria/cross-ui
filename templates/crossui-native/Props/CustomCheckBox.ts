import { GestureResponderEvent } from 'react-native';


export interface CustomCheckBoxProps {
    title: string,
    iconType: 'material-community'
    checkedIcon: 'heart' | 'bookmark' | 'checkbox-outline' | 'checkbox-marked'
    uncheckedIcon: 'checkbox-blank-outline' | 'checkbox-blank-outline' | 'checkbox-blank-outline'
    checkedColor: 'red' | '',
    checked: boolean
    size: number,
    center: boolean, 
    checkedTitle: string,
    disabled: boolean,
    iconRight: boolean,
    right: boolean,
    fontFamily: string,
    onPress?: (event: GestureResponderEvent) => void;
}