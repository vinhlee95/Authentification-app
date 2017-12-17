import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from "firebase";
import {Header, Button, Spinner} from './src/components/commons';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAkexbIrCx6klZ0xN4AA9ci9GkjGTBUXtA",
      authDomain: "my-authetication-app.firebaseapp.com",
      databaseURL: "https://my-authetication-app.firebaseio.com",
      projectId: "my-authetication-app",
      storageBucket: "my-authetication-app.appspot.com",
      messagingSenderId: "371015920035"
    });

    firebase.auth().onAuthStateChanged((user) => {
      user 
      ?
      this.setState({loggedIn: true})
      :
      this.setState({loggedIn: false})
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress = {() => firebase.auth().signOut()} > 
            Sign Out 
          </Button>
        );
        break;

      case false:
        return <LoginForm />;
        break;

      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Verification" />
        {this.renderContent()}
      </View>
    );
  }
}


