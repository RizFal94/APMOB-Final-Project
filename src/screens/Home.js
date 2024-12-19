import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#843000"/>

        <View style={styles.headerContainer}>
          <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 25,}}>
            PEREKAM SUARA
          </Text>
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 21, marginVertical: 20}}>Tekan Tombol Untuk Merekam Suara</Text>

        <TouchableOpacity
          style={{marginHorizontal: 20, marginVertical: 30}}
          onPress={() => this.props.navigation.navigate('Rekam')}>
          <Image
            source={require('./assets/mic.png')}
            style={{ width: 200, height: 200}} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => this.props.navigation.navigate('File')}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 25 }}>
            Recorded File
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => this.props.navigation.navigate('Settings')}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 25 }}>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => this.props.navigation.navigate('About')}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 25 }}>
            About App
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  headerContainer: {
    backgroundColor: '#F95454',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 20,
    width: '100%',
  },

  tombol: {
    backgroundColor: '#F95454',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 60,
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    elevation: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default Home;
