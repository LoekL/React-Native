import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      onPress={whenPressed}
      style={buttonStyle}
    >
      <Text style={textStyle}>
        {children}
       </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1, // I want this button to expand to fill as much content as it possibly can
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
// Same as: export { Button: Button }
// ES6 can condense this down to { Button }