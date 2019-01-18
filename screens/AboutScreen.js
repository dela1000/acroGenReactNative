import React from 'react';
import { Image, WebBrowser, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Icon } from 'expo';
import _ from 'lodash';

import { randomGen } from '../constants/helpers';
import Colors from '../constants/Colors';

export default class AboutScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'About',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.darkPurple,
      borderBottomWidth: 0,
    },
  });

  render() {
    return (
      <ImageBackground source={require('../assets/images/purplebg.png')} style={styles.bg}>
        <ScrollView style={styles.container}>
          <Text style={styles.headerText}>
            How to use this app:
          </Text>
          <Text style={styles.bodyText}>
            Select a number of positions, the desired difficulty levels, and figure out how to connect them.
          </Text>
          <Text style={styles.headerText}>
            About the Author:
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.ddrImage}
              source={require('../assets/images/ddr.png')}
            />
          </View>
          <Text style={styles.bodyText}>
            Daniel is an L-Basing and Standing acro enthusiast, a galavanting world traveller, and a nerdy software developer.
          </Text>
          <Text style={styles.headerText}>
            You can find him at:
          </Text>
          <View>
            <TouchableOpacity onPress={this.goToLink.bind(this, "https://instagram.com/dela1000")}>
              <Text style={styles.linksText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToLink.bind(this, "https://github.com/dela1000")}>
              <Text style={styles.linksText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={flex=4}>
        </View>
        <TouchableOpacity style={styles.bottomBarContainer} title="See All Positions" onPress={() => {this.props.navigation.navigate('AllPositions');}}>
          <Text style={styles.bottomBarText}>See All Positions</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

    goToLink = (link) => {
    console.log("+++ 20 AboutScreen.js link: ", link)
    WebBrowser.openBrowserAsync(link);
  };
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
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  ddrImage: {
    width: 100,
    height: 100,
    margin: 10,

  },
  headerText: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.lightestBlue
  },
  bodyText: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
    color: Colors.white
  },
  linksText: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 5,
    fontSize: 17,
    color: Colors.lightBrown,
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
