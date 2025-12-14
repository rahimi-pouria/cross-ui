import { GestureResponderEvent } from 'react-native';

export interface CustomButtonProps {
  id: string;
  title: string;
  color?: 'success' | 'danger' | 'warning' | 'error' | 'secondary';
  type?: 'solid' | 'outline' | 'clear';
  radius?: number | 'sm' | 'md' | 'lg';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  align?: 'left' | 'center' | 'right' | any;
  spacing: number | string
  onPress?: (event: GestureResponderEvent) => void;
  nameIcon: string
  colorIcon: 'white' | 'red'
}