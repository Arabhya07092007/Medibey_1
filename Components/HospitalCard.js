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

export default HospitalCard = ({
  navigation,
  HospitalName,
  Timing,
  Location,
  Speciality,
  ImageLink,
  Beds,
}) => {
  //   const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#E8EAFF',
        padding: 10,
        margin: 10,
        borderRadius: 19,
        /* BG */

        // background: #E8EAFF;
        // box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
      }}>
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
        <Text style={styles.docName}>{HospitalName}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            type={Icons.Ionicons}
            name={'bed-outline'}
            color="#1F0A51"
            size={20}
          />
          <Text style={styles.sb}>{Beds}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            type={Icons.Ionicons}
            name={'flash-outline'}
            color="#1F0A51"
            size={20}
          />
          <Text style={styles.sb}>{Speciality}</Text>
        </View>

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
          <Text style={styles.sb}>{Timing}</Text>
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
              Book
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HospitalProfile');
            }}
            style={[
              styles.btnStyle,
              {borderWidth: 1.5, borderColor: '#A5ACFC'},
            ]}>
            <Text style={{color: '#1F0A51', fontSize: 12, fontWeight: '500'}}>
              Directions
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
});
