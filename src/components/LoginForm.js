import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  async onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    console.log('email ' + email);
    console.log('password ' + password);
    try {
      console.log(' 1 email, password' + email + ' ---pass ' + password);
      let obj = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      this.setState({ error: '', loading: false });
      console.log(' 2 email, password' + email + ' ---pass ' + password);

      console.log({ obj });
    } catch (e) {
      try {
        console.log(' 3 e ' + JSON.stringify(e));
        console.log(' 3 email, password' + email + ' ---pass ' + password);
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (e) {
        console.log(' 4 email, password' + email + ' ---pass ' + password);
        this.setState({
          error:
            'FAILED - Createion and login - contact to admin' +
            JSON.stringify(e),
          loading: false
        });
      }
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}> Log in</Button>;
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={{ height: 50 }}
          />
        </CardSection>
        <CardSection style={{ flex: 1 }}>
          <Input
            secureTextEntry={true}
            label="hgfhgf"
            value={'hggliuklhkgjh'}
            onChangeText={password => this.setState({ password })}
            style={{ height: 50 }}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}> {this.state.error} </Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
