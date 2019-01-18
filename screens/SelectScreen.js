import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Icon } from 'expo';
import _ from 'lodash';

import { randomGen } from '../constants/helpers';
import Colors from '../constants/Colors';

export default class SelectScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    numberSelected: 4,
    randomIndexPositions: null,
    diffs: { beginner: true, intermediate: false, advanced: false, all: false }
  }

  optionRange = _.range(2, 11);

  render() {
    return (
      <ImageBackground source={require('../assets/images/purplebg.png')} style={styles.bg}>
        <View style={styles.container}>
          <Image
              source={require('../assets/images/aglogo.png')}
              style={styles.logoImage}
            />
          <TouchableOpacity style={styles.infoContainer} title="Go to Info" onPress={() => {this.props.navigation.navigate('About')}}>
            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-information' : 'md-information'} size={26} style={styles.infoButton} />
          </TouchableOpacity>
          <View style={styles.selectBoxes}>
            {Object.keys(this.state.diffs).map((key, index) => (
              <TouchableOpacity style={[styles.selectButtons, styles.diffWidth]} key={index} onPress={this.diffSelector.bind(this, key)}>
                <Text style={[styles.selectText, (this.state.diffs[key] ? styles.textActive : styles.textInactive)]}>
                  {key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.selectBoxes}>
            {this.optionRange.map((index) =>
              <TouchableOpacity style={[styles.selectButtons, styles.selectWidth]} key={index} onPress={this.numberSelected.bind(this, index)}>
                <Text style={[styles.selectText, (this.state.numberSelected === index ? styles.textActive : styles.textInactive)]}>
                  {index}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={styles.bottomBarContainer}
            title="Go to Flow"
            onPress={() => {
              this.props.navigation.navigate('Flow', {
                randomIndexPositions: this.state.randomIndexPositions
              });
            }}
          >
            <Text style={styles.bottomBarText}>Go to Flow</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  numberSelected = (index) => {
    numberSelected = index;
    this.setState({ numberSelected })
    this.setState({ numberSelected }, () => {
      this.createFlow(this.state.numberSelected, this.state.diffs)
    })
  }

  diffSelector = (key) => {
    let diffs = {...this.state.diffs}
    if(key !== "all"){
      diffs.all = false;
      diffs[key] = !diffs[key];
    }

    if((diffs.beginner && diffs.intermediate && diffs.advanced) || 
      (!diffs.beginner && !diffs.intermediate && !diffs.advanced) || 
      (key === "all" && diffs.all !== true)){
      diffs = { beginner: false, intermediate: false, advanced:  false, all: true }
    }
    this.setState({ diffs }, () => {
      this.createFlow(this.state.numberSelected, this.state.diffs)
    })
  }

  createFlow = (moves, diffs) => {
    let randomIndexPositions = {...this.state.randomIndexPositions};
    randomIndexPositions = randomGen(moves, diffs);
    this.setState({ randomIndexPositions })
  }

  componentDidMount() {
    this.createFlow(this.state.numberSelected, this.state.diffs)
  }
}

const styles = StyleSheet.create({
  bg: {
    width: '100%', 
    height: '100%'
  },
  infoContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 60,
    right: 20,
    borderRadius: 100,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 0,
      },
    }),
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    backgroundColor: Colors.lightestBlue,
    borderWidth: 0.5,
    borderColor: Colors.darkestBrown,
  },
  infoButton: { 
    // color: 'white',
    color: Colors.lightPurple,
    marginLeft: 14,
    marginTop: 1,
  },
  logoImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 330,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 25
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 25,
    // backgroundColor: Colors.lightPurple
  },
  contentContainer: {
    paddingTop: 30,
  },
  innerContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  selectBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: Colors.lightPurple,
  },
  selectButtons: {
    alignSelf: 'auto',
    backgroundColor: Colors.lightBrown,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 3,
  },
  selectWidth: {
    width: '10%',
  },
  diffWidth: {
    width: '24%',
  },
  selectText: {
    fontSize: 12,
    marginTop: 12,
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  textActive: {
    color: Colors.darkestBrown,
    fontWeight: 'bold',
  },
  textInactive: {
    color: Colors.lightestBrown
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
    marginBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    color: Colors.lightBrown,
    textAlign: 'center',
  },
});
