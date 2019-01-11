import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  // Execute this as soon as AlbumList is called
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // this.setState is part of the Component class, reckon this. == python self.
      .then(response => this.setState({ albums: response.data }));
    // debugger;
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

/*
npm install --save axios

This section introduces a library called Axios, which currently has some
compatibility issues with React Native.  If you have any issues with Axios,
check out this thread:
https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/questions/1924782
You can use the native 'fetch' library in place of Axios.
*/
