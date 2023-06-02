import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../Components/Header';
import Icon, {Icons} from '../Components/Icons';
import Hospitals from './Hospitals';

export default PharmacyProfile = ({}) => {
  return (
    <View style={styles.container}>
      {/* <Header ScreenName={'Pharmacy Profile'} /> */}

      <View style={{margin: 10}}>
        <View
          style={{
            flexDirection: 'row',
            //   backgroundColor: 'pink',
            // margin: 10,
          }}>
          <View
            style={{
              width: 100,
              height: 100,
              // backgroundColor: 'lightgreen',

              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
              elevation: 4,
              marginRight: 10,
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg',
              }}
              style={{width: 100, height: 100, borderRadius: 20}}
            />
          </View>

          <View
            style={{
              // backgroundColor: 'lightgreen',
              flex: 1,
              // padding: 10,
            }}>
            <Text style={styles.docName}>Mishra Pharmacy</Text>

            <Text style={styles.sb}>
              Address- C-7/31, Benia Bagh Rd, Lahurabir, Chetganj, Varanasi,
              Uttar Pradesh 221001
            </Text>
          </View>
        </View>

        <Text style={styles.infostxt}>OPD timing- 9:00 aM to 5:00 pM</Text>

        <Text style={styles.infostxt}>Days - 6 Days / Sunday closed</Text>
        <Text style={styles.infostxt}>Home delivery available</Text>

        <TouchableOpacity style={[styles.infostxt, {flexDirection: 'row'}]}>
          <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
          <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
          <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
          <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
          <Icon
            type={Icons.Ionicons}
            name={'star-half'}
            color="white"
            size={16}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              marginLeft: 5,
            }}>
            4.5 (243+)
          </Text>
        </TouchableOpacity>

        <View style={styles.actionbtn}>
          <TouchableOpacity
            style={[
              styles.btnStyle,
              {
                backgroundColor: '#A5ACFC',
              },
            ]}>
            <Text
              style={[
                styles.actiontxt,
                {
                  color: 'white',
                },
              ]}>
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnStyle,
              {borderWidth: 1.5, borderColor: '#A5ACFC'},
            ]}>
            <Text
              style={[
                styles.actiontxt,
                {
                  color: '#1F0A51',
                },
              ]}>
              Rate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnStyle, {borderWidth: 1.5, borderColor: 'red'}]}>
            <Text
              style={[
                styles.actiontxt,
                {
                  color: 'red',
                },
              ]}>
              24*7
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: '#1F0A51',
          fontWeight: 'bold',
          fontSize: 25,
          margin: 10,
        }}>
        Location
      </Text>
      <View style={{flex: 1}}>
        <Image
          source={require('../Assests/map.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            // borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  docName: {
    fontWeight: 'bold',
    color: '#1F0A51',
    fontSize: 20,
  },
  sb: {
    color: '#808080',
    fontSize: 15,
  },
  btnStyle: {
    // width: 110,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 6,
    justifyContent: 'center',

    paddingHorizontal: 30,
  },
  infostxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#A5ACFC',
    padding: 6,
    borderRadius: 7,
    textAlign: 'left',
    marginRight: 60,
    marginTop: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  actionbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  actiontxt: {
    fontSize: 14,
    fontWeight: '500',
  },
  box: {
    // backgroundColor: 'red',
    width: 140,
    height: 140,
    margin: 10,
    borderRadius: 13,
    padding: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // borderRadius: 25,

    alignItems: 'center',
  },
  srvTxt: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    // textAlign: 'center',
  },
});
