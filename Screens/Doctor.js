import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Icon, {Icons} from '../Components/Icons';
import DoctorCard from '../Components/DoctorCard';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';

export default Doctor = ({navigation}) => {
  //   const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />

      {/* <Header ScreenName="Doctor Near Your" /> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // margin: 10,
          marginHorizontal: 10,
          marginBottom: 10,
        }}>
        <LinearGradient
          colors={['#4E54C8', '#8F94FB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>ALL</Text>
        </LinearGradient>

        <View
          style={{
            borderWidth: 1.5,
            borderColor: '#4E54C8',
            borderRadius: 6,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
            }}>
            PRICE
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            borderColor: '#4E54C8',
            borderRadius: 6,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
            }}>
            EXPERIENCE
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            borderColor: '#4E54C8',
            borderRadius: 6,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
            }}>
            Near By
          </Text>
        </View>
        <Icon
          type={Icons.Feather}
          name={'x-circle'}
          color="#4E54C8"
          size={23}
        />
      </View>

      <ScrollView>
        <DoctorCard navigation={navigation} />
        <DoctorCard navigation={navigation} />
        <DoctorCard navigation={navigation} />
        <DoctorCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  docName: {
    fontWeight: 'bold',
    color: '#1F0A51',
    fontSize: 15,
  },
  sb: {
    color: '#808080',
    fontSize: 13,
  },
  btnStyle: {
    width: 110,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 10,
    justifyContent: 'center',
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,

    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  buttonText: {
    // fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    // margin: 10,
    color: '#fff',
    backgroundColor: 'transparent',
    paddingVertical: 3,
    // paddingHorizontal: 2,
    fontSize: 12,
  },
});
