import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      // If we succeed sign in, then:
      .then(this.onLoginSuccess.bind(this))
      // If we get an error to sign in, execute catch:
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          // If we succeed to create account:
          .then(this.onLoginSuccess.bind(this))
          // If we get an error to create account, execute catch:
          .catch(this.onLoginFail.bind(this));
          });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button whenPressed={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            // ES6:
            // { text } == { text: text }
            // You can rename text to anything you want
            onChangeText={text => this.setState({ email: text })}
            label="Email"
            placeholder="user@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            label="Password"
            placeholder="password"
            // As secureTextEntry (BOOL) is 'there', it will default to True
            // If it would not be there, it would be NA -> False
            secureTextEntry
          />
        </CardSection>

        <Text
          // If text = '' it will not be rendered
          style={styles.errorTextStyle}
        >
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
