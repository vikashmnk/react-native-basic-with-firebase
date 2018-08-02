import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ children, ...rest }) => {
  console.log(children);
  return (
    <TouchableOpacity style={styles.buttonStyle} {...rest}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#cdcfd3',
    borderWidth: 1,
    borderColor: '#a4a6a8',
    padding: 10,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  }
});

export { Button };
