import React from 'react';
import { Card } from '@rneui/themed';
import { Text } from 'react-native';
import { CustomButton } from './CustomButton';
import { CustomButtonProps } from '../Props/CustomButton';
import { customCardProps } from '../Props/customCardProps';

type MergedProps = CustomButtonProps & customCardProps;

export const CustomCard = (props: MergedProps) => {
  return (
    <Card>
      <Card.Title>{props.titleCard}</Card.Title>
      <Card.Divider />

      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: props.srcImage,
        }}
      />

      <Text style={{ marginBottom: 10 }}>
        {props.description}
      </Text>

      <CustomButton
        title={props.title}
        color={props.color}
        size={props.size}
        onPress={props.onPress}
        nameIcon={props.nameIcon}
      />
    </Card>
  );
};
