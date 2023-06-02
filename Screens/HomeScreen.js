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
  TextInput,
  ImageBackground,
} from 'react-native';

import Icon, {Icons} from '../Components/Icons';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';

export default HomScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../Assests/BackgroundImg.png')}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView>
          <View style={styles.header}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
              }}
              style={{width: 50, height: 50, borderRadius: 50}}
            />

            <LinearGradient
              colors={['#4E54C8', '#8F94FB']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearGradient}>
              <Icon
                type={Icons.Ionicons}
                name={'notifications'}
                color="#fff"
                size={30}
              />
            </LinearGradient>
          </View>

          {/* TEXT SECTION */}

          <View style={{marginTop: 10}}>
            <Text style={styles.txt1}>Hello Vedant 👋</Text>
            <Text style={styles.txt2}>
              Let’s find {'\n'}
              top doctor near you!
            </Text>
          </View>

          {/* SEARCH BAR */}
          <View style={styles.srchbar}>
            <Image
              source={require('../Assests/search_icon.png')}
              style={{
                width: 28,
                height: 28,
                marginHorizontal: 5,
                marginVertical: -10,
              }}
            />
            <TextInput
              style={styles.srchTxt}
              placeholder="Search Doctor, Hospitals or Blood Banks"
              cursorColor="#1F0A51"
              placeholderTextColor="#1F0A51"
            />
          </View>

          {/* SERVICES */}

          <Text style={styles.secTxt}>Services</Text>
          <View style={styles.srvSuperCont}>
            <TouchableOpacity
              style={styles.srvCont}
              onPress={() => {
                navigation.navigate('Pharmacy');
              }}>
              <Text style={styles.srvTxt}>24*7 Pharmacy Near You</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.srvCont}
              onPress={() => {
                navigation.navigate('BloodBank');
              }}>
              <Text style={styles.srvTxt}>Blood Banks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.srvCont}
              onPress={() => {
                navigation.navigate('Doctor');
              }}>
              <Text style={styles.srvTxt}>Doctors Near You</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.srvCont}
              onPress={() => {
                navigation.navigate('Hospitals');
              }}>
              <Text style={styles.srvTxt}>Superspeciality Hospitals</Text>
            </TouchableOpacity>
          </View>

          {/* MY APPOINTMENTS */}

          <Text style={styles.secTxt}>Appointment</Text>

          <View
            style={{
              backgroundColor: '#DDDCFF',
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text style={styles.appointtxt}>No Upcoming Appointment</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AppointmentField');
              }}>
              <Text
                style={{
                  color: '#5443E8',
                  fontSize: 14,
                  fontWeight: '500',
                  paddingVertical: 4,
                  borderRadius: 6,
                  borderWidth: 1.5,
                  borderColor: '#5443E8',
                  paddingHorizontal: 10,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                Book Appointment
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, marginTop: 10}}>
            <Image
              source={require('../Assests/banner2.png')}
              style={{width: '100%', height: 190, borderRadius: 10}}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt1: {
    color: '#808080',
    fontSize: 24,
    fontWeight: '500',
  },
  txt2: {
    fontWeight: '500',
    color: 'black',
    fontSize: 32,
  },
  srchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#DDDCFF',
    borderRadius: 20,
    // padding: 5,
    // padding: -20,
  },
  srchTxt: {
    color: 'black',
    fontSize: 14,
  },
  secTxt: {
    color: '#1F0A51',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },

  srvCont: {
    width: 160,
    backgroundColor: '#DDDCFF',
    borderRadius: 10,
    padding: 10,
    height: 65,
    justifyContent: 'center',
    margin: 5,
  },

  srvTxt: {
    color: '#1F0A51',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  srvSuperCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appointtxt: {
    color: '#1F0A51',

    textAlign: 'center',
    fontSize: 18,
  },
  btnStyle: {
    // width: 110,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  linearGradient: {
    // flex: 1,
    // paddingLeft: 10,
    // paddingRight: 10,
    // borderRadius: 5,

    // justifyContent: 'center',
    // backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
