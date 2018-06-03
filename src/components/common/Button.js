import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    color: '#007aff',
    fontWeight: '900',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
