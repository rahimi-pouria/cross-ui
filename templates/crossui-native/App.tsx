import { StyleSheet, View } from 'react-native';

import { CustomModal } from './components/CustomModal';
import { useState } from 'react';
import { Text } from 'react-native';
import { CustomButton } from './components/CustomButton';


export default function App() {
  const [visible1, setVisible1] = useState(false);

  const toggleDialog1 = () => setVisible1(!visible1);
  const hideModal = () => setVisible1(false)
  return (
    <View style={styles.container}>

        <CustomModal title={'Open modal'} 
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
          onPressCloseIcon={hideModal}
          onPress={toggleDialog1}
          titleModal='Dialog Title'
          descriptionModal='Dialog body text. Add relevant information here.'
            styleModal={{
              container: { backgroundColor: '#f0f0f0' },
              title: { color: 'black', fontSize: 20 },
            }}
        >

      <CustomButton title="Click me" onPress={() => alert('Clicked!')} />
        </CustomModal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

