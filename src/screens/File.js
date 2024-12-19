import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet} from 'react-native';

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container1}>

        <Text style={{color: '#C62E2E', textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginTop: 20}}>
          Recorded File
        </Text>

          <TouchableOpacity
            style={styles.tombol}
            onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 15}}>
                Back
              </Text>
          </TouchableOpacity>

        <View style={styles.containerFile}>
          <View style={styles.file}>
            <Text style={styles.textFile}>
              File1 euy
            </Text>
            <TouchableOpacity
              style={styles.tombolFile}
              onPress={() => console.log('memutar file')}>
                <Image
                  source={require('./assets/play.png')}
                  style={{ width: 25, height: 25}}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.file}>
            <Text style={styles.textFile}>
              File2 lurr
            </Text>
            <TouchableOpacity
              style={styles.tombolFile}
              onPress={() => console.log('memutar file')}>
                <Image
                  source={require('./assets/play.png')}
                  style={{ width: 25, height: 25}}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.file}>
            <Text style={styles.textFile}>
              File3 
            </Text>
            <TouchableOpacity
              style={styles.tombolFile}
              onPress={() => console.log('memutar file')}>
                <Image
                  source={require('./assets/play.png')}
                  style={{ width: 25, height: 25}}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.file}>
            <Text style={styles.textFile}>
              File4 
            </Text>
            <TouchableOpacity
              style={styles.tombolFile}
              onPress={() => console.log('memutar file')}>
                <Image
                  source={require('./assets/play.png')}
                  style={{ width: 25, height: 25}}
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

  containerFile: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  file: {
    backgroundColor: '#B2B2B2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '91%',
    height: 50,
    marginHorizontal: 15,
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 15,
  },

  textFile: {
    marginLeft: 20,
    textAlign: 'left',
    color: '#222000',
    fontSize: 20,
    marginVertical: 5,
  },

  tombolFile: {
    marginRight: 20,
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

export default File;
