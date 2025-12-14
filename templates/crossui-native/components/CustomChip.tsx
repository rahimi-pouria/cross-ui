import { Chip } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { customChipProps } from '../Props/CustomChip';

export const CustomChip = (props: customChipProps) => {
    return (
        <>
            <Chip
                ViewComponent={props.ViewComponent}
                title={props.title}
                type={props.type}
                containerStyle={props.containerStyle}
                linearGradientProps={props.linearGradientProps}
            />
        </>
    )
}