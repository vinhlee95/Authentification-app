import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardItem, Input, Spinner } from './commons';

class LoginForm extends Component {
   state = {
      email: '',
      password: '',
      error: '',
      loading: false
   };

   onButtonPress() {
      const {email, password} = this.state;
      this.setState({error: '', loading: true});
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
         .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(this.onLoginSuccess.bind(this))
               .catch(this.onLoginFail.bind(this));
         });
   }

   onLoginSuccess() {
     this.setState({
         email: '',
         password: '',
         loading: false,
         error: 'Welcome back!'
     });
   }

   onLoginFail() {
      this.setState({
         email: this.state.email,
         password: this.state.password,
         loading: false,
         error: 'Authentification Failed'
      });
   }

   render() {
      return(
         <Card>
            {/* Email  */}
            <CardItem>
               <Input 
                  value = {this.state.email}
                  handleChangeText = {email => this.setState({email})}
                  placeholder = 'Username/ Email'
               />
            </CardItem>

            {/* Password */}
            <CardItem>
               <Input
                  secureTextEntry 
                  // (secureTextEntry = {true})
                  value = {this.state.password}
                  handleChangeText = {password => this.setState({password})}
                  placeholder = 'Password'
               />
            </CardItem>

            {/* Login Failed Message */}
            <Text style = {styles.failedMessage} >
               {this.state.error}
            </Text>
            
            {/* Login Button or Spinner */}
            <CardItem>
               {this.state.loading
               ?
               <Spinner size = "small" />
               :
               <Button onPress = {this.onButtonPress.bind(this)}>
                  Log in
               </Button>
               }
               
            </CardItem>
         </Card>
      );
   }
}

const styles = {
   failedMessage: {
      color: 'red',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 8
   }
};

export default LoginForm;