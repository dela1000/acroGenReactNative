import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { WebBrowser } from 'expo';
import _ from 'lodash';
import Position from '../components/Position';
import Colors from '../constants/Colors';
import { positionsList } from '../constants/acroPositions';


export default class AllPositionsScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Flow',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.darkPurple,
      borderBottomWidth: 0,
    },
  });

  render() {
    const { navigation } = this.props;
    const randomIndexPositions = navigation.getParam('randomIndexPositions', 'Nothing selected');

    return (
      <ImageBackground source={require('../assets/images/purplebg.png')} style={styles.bg}>
        <ScrollView style={styles.container}>
          <View>
            {positionsList.map((position, index) =>
              <Position key={index} value={index} position={position}/>
            )}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.bottomBarContainer} title="Go to About" onPress={() => {this.props.navigation.navigate('About');}}>
          <Text style={styles.bottomBarText}>Go to Select</Text>
        </TouchableOpacity>
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
    paddingTop: 10,
    paddingBottom: 80,
    marginBottom: 70,
  },
  bottomBarContainer: {
    flex: 2,
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
    marginBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.lightBrown,
    textAlign: 'center',
  },
});
