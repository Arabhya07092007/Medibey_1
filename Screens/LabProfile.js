import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../Components/Header';

import Icon, {Icons} from '../Components/Icons';

export default LabProfile = ({data}) => {
  return (
    <SafeAreaView>
      <Header ScreenName="Lab Profile" />

      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1504670742/rpjgrkfsfexubeqvzotp.jpg',
              }}
              style={{
                width: 130,
                height: 130,
                borderRadius: 25,
              }}
            />
          </View>
        </View>

        <Text
          style={[
            styles.LabName,
            {
              textAlign: 'center',
            },
          ]}>
          Dr Lalpath Labs
        </Text>

        <View style={styles.featureDock}>
          <View style={styles.featureObj}>
            <Text style={[styles.featureTxt, {color: '#B28CFF'}]}>350+</Text>
            <Text style={styles.featureTxt2}>Patients</Text>
          </View>

          <TouchableOpacity
            style={[
              {
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              },
              styles.featureObj,
            ]}>
            <Icon
              type={Icons.Ionicons}
              name={'call-outline'}
              color="#8B88FF"
              size={40}
            />
            <Text style={styles.featureTxt2}>Call</Text>
          </TouchableOpacity>

          <View style={styles.featureObj}>
            <Text style={[{color: '#FF9A9A'}, styles.featureTxt]}>284+</Text>
            <Text style={styles.featureTxt2}>Reviews</Text>
          </View>
        </View>

        <View style={styles.abtSec}>
          <Text style={styles.abtTi}>About Diagnostic Centre</Text>
          <Text style={styles.abtSb}>
            Dr. Lal Pathlabs is the top most pathalogy labs in Varanasi district
            and in Uttar Pradesh Distrct . They take samples at location as well
            as home visit.They are highly economical.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // justifyContent: 'space-between',
            // backgroundColor: 'red',
            justifyContent: 'center',
            marginBottom: 100,
          }}>
          <TouchableOpacity style={[styles.box, {backgroundColor: '#5974FF'}]}>
            <Text style={styles.srvTxt}>Nearest Center</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.box, {backgroundColor: '#7D6BF3'}]}>
            <Text style={styles.srvTxt}>Book {'\n'}Your Text</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.box, {backgroundColor: '#6E6CDA'}]}>
            <Text style={styles.srvTxt}>Download {'\n'}Your report</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.box, {backgroundColor: '#C588F4'}]}>
            <Text style={styles.srvTxt}>Know More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // backgroundColor: 'white',
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 25,
  },
  LabName: {
    color: '#1F0A51',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  featureDock: {
    backgroundColor: '#A5ACFC',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
    // justifyContent: 'space-evenly',
  },
  featureObj: {
    backgroundColor: 'white',
    //   margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  featureTxt: {fontSize: 32, fontWeight: '500'},
  featureTxt2: {
    color: '#8A96BC',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  abtSec: {
    margin: 10,
    marginHorizontal: 20,
  },
  abtTi: {
    color: '#1F0A51',
    fontWeight: 'bold',
    fontSize: 20,
    // margin: 10,
  },
  abtSb: {
    color: 'black',
    // marginTop: 5,
    // fontSize: 14,
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
    fontSize: 26,
    fontWeight: '500',
    // textAlign: 'center',
  },
});
