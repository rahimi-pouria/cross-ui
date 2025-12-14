import React from 'react';
import { Stack } from 'react-native-flex-layout';
import { Button } from '@rneui/themed';
// @ts-ignore
import { customButton } from '../Props/CustomButton'
import { Icon } from '@rneui/themed/dist/Icon';

export const CustomButton = (props: customButton) => (
   // @ts-ignore
<Stack  align={props.align} spacing={4}>
   <Button type={props.type} color={props.color} size={props.size}
   onPress={props.onPress} radius={props.redius} loading={props.loading}
   > 
        {props.title}
        <Icon name={props.nameIcon} color={props.color} />
   </Button>
</Stack>
);
