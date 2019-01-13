import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
// By default for directories it will look for index.js
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import { firebaseAuthSecret } from './secrets/firebaseAuthSecret';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount () {
    firebase.initializeApp(firebaseAuthSecret);

    // Event handler that accepts a function.
    // Whenever a user signs in or signs out, this function will be called.
    firebase.auth().onAuthStateChanged((user) => {
      // If there is a user passed, execute:
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button whenPressed={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
