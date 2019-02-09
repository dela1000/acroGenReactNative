import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    loaded: false,
  }
  // Load fonts here
  loadFontsAsync = async () => {
    await Font.loadAsync({pacifico: require('./assets/fonts/Pacifico-Regular.ttf')});
    await Font.loadAsync({arimo: require('./assets/fonts/SpaceMono-Regular.ttf')});
    this.setState({ loaded: true });
  }

  componentDidMount() {
    this.loadFontsAsync();
  }

  render() {
    if (!this.state.loaded) {
        return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue'
  },
});
