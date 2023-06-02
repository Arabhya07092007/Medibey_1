import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Icon, {Icons} from '../Components/Icons';

export default PharmacyCard = ({
  navigation,
  Name,
  ImageLink,
  Txt1,
  Txt2,
  Time,
  Location,
  Availability,
}) => {
  return (
    <View
      style={[
        styles.shadow,
        Availability
          ? {borderWidth: 1, borderColor: 'red', shadowColor: 'red'}
          : null,
      ]}>
      <View style={{paddingRight: 10}}>
        <Image
          source={{
            uri: ImageLink,
          }}
          style={{
            width: 83,
            height: 83,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
        />
      </View>
      <View
        style={{
          // backgroundColor: 'lightgreen',
          flex: 1,
          // padding: 10,
        }}>
        <Text style={styles.docName}>{Name}</Text>
        <Text style={styles.sb}>{Txt1}</Text>
        {Availability ? (
          <Text style={[styles.sb, {color: 'red'}]}>Open 24*7</Text>
        ) : (
          <Text style={styles.sb}>{Txt2}</Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            type={Icons.Ionicons}
            name={'time-outline'}
            color="#1F0A51"
            size={20}
          />
          <Text style={styles.sb}>{Time}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            type={Icons.Ionicons}
            name={'location-outline'}
            color="#1F0A51"
            size={20}
          />
          <Text style={styles.sb}>{Location}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            // flex: 1,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={[
              styles.btnStyle,
              {
                backgroundColor: '#A5ACFC',
              },
            ]}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontWeight: '500',
              }}>
              Call
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PharmacyProfile');
            }}
            style={[
              styles.btnStyle,
              {borderWidth: 1.5, borderColor: '#A5ACFC'},
            ]}>
            <Text style={{color: '#1F0A51', fontSize: 12, fontWeight: '500'}}>
              Direction
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    borderRadius: 6,
    justifyContent: 'center',
  },
  shadow: {
    flexDirection: 'row',
    backgroundColor: '#E8EAFF',
    padding: 10,
    margin: 10,
    borderRadius: 19,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 2,
  },
});
