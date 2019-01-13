// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => { // Function should have the same name as the file!
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // Vertical Direction
    alignItems: 'center', // Horizontal Direction
    height: 70, // Pixel Value
    paddingTop: 30, // Pixel Value - https://www.w3schools.com/css/css_padding.asp
    shadowColor: '#000', // Black
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Value between 0 & 1
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
