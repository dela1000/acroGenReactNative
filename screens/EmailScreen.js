import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Alert, KeyboardAvoidingView } from 'react-native';

import Colors from '../constants/Colors';
import { emailLocation } from '../secrets/Secrets';

export default class EmailScreen extends Component {
  static navigationOptions = () => ({
    title: 'Email developer',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.darkPurple,
      borderBottomWidth: 0,
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  sendEmail = () => {
    
    if(this.state.name === ''){
      Alert.alert(
        'Please enter a name',
        '',
        [{text: 'OK'}],
      )
      return;
    }

    if(this.state.email === ''){
      Alert.alert(
        'Please enter an email',
        '',
        [{text: 'OK'}],
      )
      return;
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(this.state.email) === false) {
        console.log("Email is Not Correct");
        Alert.alert(
          'Please enter a valid email',
          '',
          [{text: 'OK'}],
        )
        return;
      }
    }

    if(this.state.message === ''){
      Alert.alert(
        'Please enter a message',
        '',
        [{text: 'OK'}],
      )
      return;
    }

    let data = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      source: 'acroGenApp'
    })

    fetch( emailLocation + '/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((responseJson) => {
        if(responseJson.status === 200){
          Alert.alert(
            'Thank you for the message.',
            'I will get back to you very soon.',
            [{text: 'OK'}],
          )
          this.props.navigation.navigate('About')
        } else {
          Alert.alert(
            'Something went wrong. Sorry!',
            '',
            [{text: 'OK'}],
          )
        }

      })
      .catch((error) => {
        Alert.alert(
          'Something went wrong. Sorry!',
          '',
          [{text: 'OK'}],
        )
      });
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/purplebg.png')} style={styles.bg}>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView style={{ flex: 1 }}
            keyboardVerticalOffset={100} behavior={"position"}>
              <Text style={[styles.headerText, styles.marginTop]}>Enter your name:</Text>
              <TextInput
                style={[styles.textInput, styles.marginBottom]}
                placeholder="Enter your name"
                onChangeText={(name) => this.setState({name})}
              />
              <Text style={[styles.headerText, styles.marginTop]}>Enter your email:</Text>
              <TextInput
                style={[styles.textInput, styles.marginBottom]}
                placeholder="Enter your email"
                onChangeText={(email) => this.setState({email})}
              />
              <Text style={[styles.headerText, styles.marginTop]}>Enter your message:</Text>
              <TextInput
                style={[styles.messageInput, styles.marginBottom]}
                placeholder="Type your message"
                multiline={true}
                numberOfLines={4}
                onChangeText={(message) => this.setState({message})}
              />
              <TouchableOpacity style={styles.bottomBarContainer} title="See All Positions" onPress={this.sendEmail}>
                <Text style={styles.bottomBarText}>Send Email</Text>
              </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    width: '100%', 
    height: '100%'
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 180,
    marginHorizontal: 50,
  },
  imageContainer: {
    alignItems: 'center',
  },
  headerText: {
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.lightestBlue
  },
  textInput: {
    height: 40,
    paddingLeft: 6,
    backgroundColor: Colors.white
  },
  messageInput: {
    height: 200,
    paddingLeft: 6,
    backgroundColor: Colors.white
  },
  marginTop: {
    marginTop: 20
  },
  marginBottom: {
    marginBottom: 5
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: Colors.lightGreen,
    paddingVertical: 20,
  },
  bottomBarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.lightBrown,
    textAlign: 'center',
  },
});
