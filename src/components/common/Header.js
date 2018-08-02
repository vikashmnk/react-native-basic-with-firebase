// import libs for making the component
import React from 'react';
import { Text, View } from 'react-native';

//make the components

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 50
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    height: 90,
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};
//Make the components available to other parts of the app

export  {Header};
