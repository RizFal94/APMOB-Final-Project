import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet} from 'react-native';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container1}>

        <Text style={{color: '#C62E2E', textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginTop: 20}}>
          About Apps
        </Text>

        <TouchableOpacity
        style={styles.tombol}
        onPress={() => this.props.navigation.goBack()}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 15}}>
            Back
            </Text>
        </TouchableOpacity>

        <View style={styles.container2}>
          <Text style={{color: '#F95454', textAlign: 'center', fontSize: 45, marginVertical: 20}}>
            Aplikasi Perekam Suara
          </Text>
          <Text style={{color: '#F95454', textAlign: 'center', fontSize: 45, marginVertical: 20}}>
            V 1.0.0
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'left',
    marginDown: 20,
  },

  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 50,
    width: '100%',
  },

  tombol: {
    backgroundColor: '#F95454',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    marginBottom: 30,
    elevation: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default About;
