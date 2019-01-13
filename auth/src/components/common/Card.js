import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // Borders
    borderWidth: 1,       // Draw a border of pixel width 1
    borderRadius: 2,      // At corners, give them rounded edges
    borderColor: '#ddd',  // lightgrey
    borderBottomWidth: 0, // No border at the bottom
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // offset: what side do we want the shadow to be on
    // width: 0 -> no shadow on the left or right side
    // but I do want height so there will be some shadowing on the bottom
    shadowOpacity: 0.1,
    shadowRadius: 2, // just like the borderRadius -> rounded corners
    elevation: 1,
    marginLeft: 5,   // Place spacing in between components
    marginRight: 5,  // Place spacing in between components
    marginTop: 10    // Place spacing in between components
  }
};

export { Card };
