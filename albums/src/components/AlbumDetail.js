import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => { // unpack props.album into album
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)}>
          <Text>Buy Now on Amazon!</Text>
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,      // spread out as far as possible
    width: null   // spread out as far as possible
  }
};

export default AlbumDetail;

/*
Albums data:

[{
  artist: "Taylor Swift"
  image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg"
  thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
  title: "Taylor Swift"
  url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6"
}, ...]

*/
