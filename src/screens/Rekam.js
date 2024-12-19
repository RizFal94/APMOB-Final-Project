import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Rekam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false, 
      timer: null, 
      timeRecorded: 0, 
    };
  }

  render() {
    return (
      <View>
        <Text style={{color: '#C62E2E', textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginTop: 20}}>
          Merekam Suara
        </Text>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => this.props.navigation.goBack()}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 15}}>
              Back
            </Text>
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 75}}>
            00.00.00
          </Text>
        </View>

        <View style={styles.containerRekam}>
          <View style={styles.rekam}>
            <TouchableOpacity
              style={styles.elemenKiri}
              onPress={() => console.log('rekam suara')}>
                <Image
                  source={require('./assets/pause.png')}
                  style={{ width: 70, height: 70 }}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.elemenKanan}
              onPress={() => console.log('stop')}
              >
                <Image
                  source={require('./assets/stop.png')}
                  style={{ width: 80, height: 80 }}
                />
            </TouchableOpacity>
          </View>
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

  containerRekam: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rekam: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '91%',
    marginHorizontal: 15,
    marginVertical: 50,
    paddingVertical: 5,
    borderRadius: 15,
  },

  elemenKiri: {
    marginLeft: 90,
    textAlign: 'left',
    color: '#222000',
    fontSize: 20,
    marginVertical: 5,
  },

  elemenKanan: {
    marginRight: 90,
    alignItems: 'right',
    marginVertical: 5,
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

export default Rekam;
