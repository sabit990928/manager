import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};
//  [styles.containerStyle, props.style]
const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);


export default CardSection;
