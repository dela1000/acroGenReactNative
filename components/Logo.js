import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import resolveAssetSource from "resolveAssetSource";
import Colors from '../constants/Colors';

class Logo extends React.Component {

  render (){
    return (
      <View style={styles.imageContainer}>
        <Text style = { [styles.titleFont, styles.acro] } >Acro</Text> 
        <Text style = { styles.titleFont } >Generator</Text> 
      </View>
    )
  }
}

export default Logo;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
  },
  titleFont: {
    color: Colors.lightestBlue,
    textAlign: 'center',
    fontSize: 90,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    fontFamily: 'pacifico',
    transform: [{ rotate: '359deg'}]

  },
  acro: {
    top: 112,
    right: 10
  },
})