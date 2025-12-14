import { GestureResponderEvent } from 'react-native';

export interface CustomModalProps {
    isVisible: boolean
    onBackdropPress?: (event: GestureResponderEvent) => void;
    titleModal: string,
    descriptionModal: string,
    styleModal: Object,
    children?: React.ReactNode;
    onPressCloseIcon:  (event: GestureResponderEvent) => void;
}