import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../Components/Header';
import Icon, {Icons} from '../Components/Icons';

export default BloodBProfile = ({}) => {
  return (
    <View style={styles.container}>
      {/* <Header ScreenName={'Blood Bank'} /> */}

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
              backgroundColor: 'lightgreen',

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
            <Text style={styles.docName}>
              Indian Medical Association Blood Bank
            </Text>

            <Text style={styles.sb}>
              53 West 53rd Street, Billionaires row, NYC
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginHorizontal: 10,
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: '#A5ACFC',
              // padding: 10,
              // justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              borderRadius: 7,
            }}>
            <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
            <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
            <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
            <Icon type={Icons.Ionicons} name={'star'} color="white" size={16} />
            <Icon
              type={Icons.Ionicons}
              name={'star-half'}
              color="white"
              size={14}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '600',
                marginLeft: 5,
              }}>
              4.5
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btnStyle,
              {borderWidth: 1.5, borderColor: '#A5ACFC', paddingHorizontal: 40},
            ]}>
            <Text
              style={{
                color: '#1F0A51',
                fontSize: 14,
                fontWeight: '500',
              }}>
              Call
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, margin: 10, justifyContent: 'center'}}>
        <Text style={styles.docName}>Location</Text>
        <View
          style={{
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 2,
            // padding: 10,
            marginTop: 10,
          }}>
          <Image
            source={require('../Assests/map.png')}
            style={{
              width: 340,
              height: 430,
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
        </View>
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
    width: 110,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 6,
    justifyContent: 'center',
  },
});
