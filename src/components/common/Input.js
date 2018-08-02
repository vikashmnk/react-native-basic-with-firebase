import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, ...rest }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={value} onChangeText={onChangeText} {...rest} />
    </View>
  );
};

export { Input };
