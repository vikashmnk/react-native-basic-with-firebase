import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import Expo from 'expo';

class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyA9oC3rc-JtIfOrWlQV7wztcBNNtdagDUw',
      authDomain: 'auth-47bd5.firebaseapp.com',
      databaseURL: 'https://auth-47bd5.firebaseio.com',
      projectId: 'auth-47bd5',
      storageBucket: 'auth-47bd5.appspot.com',
      messagingSenderId: '162946806532'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
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
          <View style={{ flex: 1 }}>
            <Button onPress={() => firebase.auth().signOut()}>Sign Out </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header headerText="Authentication " />
        {this.renderContent()}
      </View>
    );
  }
}

export default Expo.registerRootComponent(App);
