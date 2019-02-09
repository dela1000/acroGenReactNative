import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import resolveAssetSource from "resolveAssetSource";
import Colors from '../constants/Colors';

class Logo extends React.Component {

  render (){
    return (
      <View style={styles.imageContainer}>
        <Text style = { styles.titleFont } >Acro</Text> 
        <Text style = { styles.titleFont } >Generator</Text> 
      </View>
    )
  }
}

export default Logo;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  titleFont: {
    position: 'absolute',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 60,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    fontFamily: 'pacifico'
  },
})