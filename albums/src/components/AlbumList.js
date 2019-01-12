import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  // Execute this as soon as AlbumList is called
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // this.setState is part of the Component class, reckon this = pythonic self.
      .then(response => this.setState({ albums: response.data }));
    // debugger;
  }

  renderAlbums() {
    // "for albumDict in albumsList return albumDict.title & albumDict",
    //  which are passed to AlbumDetail
    return this.state.albums.map(albumDict =>
      // **key** is some internal thing that needs to be added for performance reasons &
      // needs to be a unique id associated to the value (index won't work as index
      // is not deterministic)
      <AlbumDetail key={albumDict.title} album={albumDict} />
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

This section introduces a library called Axios, which currently has some compatibility issues with React Native.
If you have any issues with Axios, check out this thread:
https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/questions/1924782

You can use the native 'fetch' library in place of Axios.

--
Albums data:

[{
  artist: "Taylor Swift"
  image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg"
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  title: "Taylor Swift"
  url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6"
}, ...]

*/
