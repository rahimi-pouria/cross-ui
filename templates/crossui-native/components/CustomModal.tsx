import React from 'react';
import { Dialog, Icon } from '@rneui/themed';
import { View, Text, Pressable } from 'react-native';
import { CustomButton } from './CustomButton';
import { CustomButtonProps } from '../Props/CustomButton';
import { CustomModalProps } from '../Props/CustomModal';

type mergeProps = CustomButtonProps & CustomModalProps
export const CustomModal = (props: mergeProps) => {

const defaultStyle = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  closeIcon: { position: 'absolute', top: 10, right: 10 },
};

const addStyle = {...defaultStyle, ...props.styleModal}

  return (
    <View style={addStyle.container}>
      <CustomButton
        title={props.title}
        onPress={props.onPress}
      />

      <Dialog
        isVisible={props.isVisible} 
        onBackdropPress={props.onBackdropPress}>

        <CustomButton style={defaultStyle.closeIcon} 
        nameIcon='close' type="material"
        onPress={props.onPressCloseIcon} />

        {props.titleModal && 
             <Text style={addStyle.title}>{props.titleModal}</Text>
        }
        {props.descriptionModal && 
        
        <Text>{props.descriptionModal}</Text>
        }
        {props.children}
      </Dialog>
    </View>
  );
};