/** @format */

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
  return (
    // You always need to return a single top-level tag in your root file / App
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Render it to device
AppRegistry.registerComponent('albums', () => App);

/* Notes:
- As the App component is the first component that is rendered to the screen,
  it is called the root component. Only the 'root' component uses 'AppRegistry'
- Every other component is called a 'child' component.
- rallycoding.herokuapp.com/api/music_albums
*/
