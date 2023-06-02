import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../Components/Header';

import Icon, {Icons} from '../Components/Icons';

export default AppointmentField = ({}) => {
  return (
    <View style={styles.container}>
      {/* <Header ScreenName={'Appointments'} /> */}
      <View
        style={{
          backgroundColor: '#dcddff',
          margin: 10,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          elevation: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'lightgreen',
            margin: 10,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 70, height: 70, borderRadius: 50}}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/011/059/149/original/pharmacy-logo-medicine-symbol-vector.jpg',
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: '#1F0A51',
              fontSize: 18,
              marginLeft: 10,
            }}>
            Dr. Lal Pathlabs - Complete {'\n'}Blood Test
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View>
            {/* upar wala dibba */}
            <View
              style={{
                backgroundColor: '#A5ACFC',
                borderRadius: 7,
                padding: 4,
                paddingHorizontal: 8,
              }}>
              <View style={styles.infobox}>
                <Icon
                  type={Icons.Ionicons}
                  name={'calendar-outline'}
                  color="#fff"
                  size={24}
                />
                <Text style={styles.txt}>Monday, May 12</Text>
              </View>
              <View style={styles.infobox}>
                <Icon
                  type={Icons.Ionicons}
                  name={'time-outline'}
                  color="#fff"
                  size={24}
                />
                <Text style={styles.txt}>11:00am - 12:00am</Text>
              </View>
            </View>
          </View>

          <View>
            {/* Niche wala price box */}
            <View
              style={{
                // borderWidth: 1.5,
                borderColor: '#A5ACFC',

                backgroundColor: '#A5ACFC',
                borderRadius: 7,

                width: 110,
                alignItems: 'center',
                paddingVertical: 4,
                justifyContent: 'center',
                // marginTop: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: '500'}}>call</Text>
            </View>
            <View
              style={{
                borderWidth: 1.5,
                borderColor: '#A5ACFC',
                borderRadius: 7,

                width: 110,
                alignItems: 'center',
                paddingVertical: 4,
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: '#1F0A51', fontWeight: '500'}}>Rate</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <View
            style={{
              borderWidth: 1.5,
              borderColor: '#A5ACFC',
              borderRadius: 7,

              width: 110,
              alignItems: 'center',
              paddingVertical: 4,
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: '#1F0A51', fontWeight: '500'}}>
              Price - ₹ 299
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#A5ACFC',
              borderRadius: 7,

              width: 110,
              alignItems: 'center',
              paddingVertical: 4,
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: '#fff', fontWeight: '500'}}>Report</Text>
          </View>
        </View>

        {/* Instructions section */}
        <View style={{margin: 10}}>
          <Text style={{color: '#1F0A51', fontSize: 16, fontWeight: '500'}}>
            Instructions
          </Text>
          <Text style={{color: 'black'}}>
            • Avoid Using lotions, creams or perfumes.
          </Text>
          <Text style={{color: 'black'}}>
            • Remove metal objects like jewelry, hairpins or hearing aids.
          </Text>
          <Text style={{color: 'black'}}>
            • Stop eating and driking several hours before hand{' '}
            {`(for GI X Rays)`}.
          </Text>
          <Text style={{color: 'black'}}>
            • Wear comfortable clothing or change into a gown before the X-Ray.
          </Text>
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
    backgroundColor: 'white',
  },
  btnStyle: {
    // width: 110,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 6,
    // justifyContent: 'center',
    backgroundColor: '#A5ACFC',
    flexDirection: 'row',
  },
  infobox: {
    flexDirection: 'row',
    // erjngerjk
    // gtgek
    // padding: 10,

    // marginHorizontal: 8,
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '500',
  },
});
