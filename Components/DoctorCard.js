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

export default DoctorCard = ({navigation}) => {
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
            uri: 'https://www.pngitem.com/pimgs/m/193-1939059_indian-doctor-png-download-indian-doctor-images-png.png',
          }}
          style={{
            width: 83,
            height: 100,
            borderRadius: 10,
          }}
          /* DocIng */
        />
      </View>
      <View
        style={{
          // backgroundColor: 'lightgreen',
          flex: 1,
          // padding: 10,
        }}>
        <Text style={styles.docName}>Dr Ajay Kumar Mishra</Text>
        <Text style={styles.sb}>MBBS, MD, MS</Text>
        <Text style={styles.sb}>General Physician</Text>
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
          <Text style={styles.sb}>Next available at Tomorrow 9 AM</Text>
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
          <Text style={styles.sb}>53rd Street, Billionaires row</Text>
        </View>

        <Text style={styles.docName}>You pay ₹ 399</Text>

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
              navigation.navigate('DoctorProfile');
            }}
            style={[
              styles.btnStyle,
              {borderWidth: 1.5, borderColor: '#A5ACFC'},
            ]}>
            <Text style={{color: '#1F0A51', fontSize: 12, fontWeight: '500'}}>
              View More
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
