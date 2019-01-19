import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import resolveAssetSource from "resolveAssetSource";
import Colors from '../constants/Colors';

class Logo extends React.Component {

  render (){
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/aglogo.png')}
        />
      </View>
    )
  }
}

export default Logo;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  logoImage: {
    width: 330,
    height: 200,
    resizeMode: 'contain',
  },
})