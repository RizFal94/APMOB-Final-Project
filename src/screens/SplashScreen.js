import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native"; 

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: '#F95454', marginVertical: 50}}>
          APLIKASI PEREKAM SUARA
        </Text>
        <Image
          source={require('./assets/grfT.png')}
          style={{ width: 200, height: 200}} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default SplashScreen;
