import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import resolveAssetSource from "resolveAssetSource";
import Colors from '../constants/Colors';

class Position extends React.Component {

  measureView(event) {
    this.setState({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.width
    });
  }
  componentWillMount() {
    let image = this.props.position.image;
    let source = resolveAssetSource(image);
    this.setState({ratio: source.height / source.width});
  }

  render (){
    const {name, difficulty, image } = this.props.position;
    return (
      <View onLayout={event => this.measureView(event)} style={styles.outerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>
            {name}
          </Text>
          <Text style={styles.diff}>
            {difficulty}
          </Text>
        </View>
        <Image
          source={image}
          style={{ width: this.state.width, height: this.state.width * this.state.ratio }}
          resizeMode="contain"
        />
      </View>
    )
  }
}

export default Position;

const styles = StyleSheet.create({
  outerContainer: {
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 25
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  text: {
    flex: 1,
    fontSize: 19,
    color: Colors.white,
  },
  diff: {
    textTransform: 'capitalize',
    fontSize: 10,
    marginTop: 4,
    color: Colors.lightestBlue,
  },
})