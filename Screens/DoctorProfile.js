import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../Components/Header';
import Icon, {Icons} from '../Components/Icons';

import LinearGradient from 'react-native-linear-gradient';
import {Tooltip} from 'react-native-paper';

export default DoctorProfile = ({}) => {
  return (
    <View style={{flex: 1}}>
      {/* <Header ScreenName={'Doctor Profile'} /> */}
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
                uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201512/nareshtrehan-story_647_121015090548.jpg',
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
          Dr Naresh Trehan
        </Text>

        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Assests/heartIcon.png')}
            style={{width: 30, height: 30, marginHorizontal: 5}}
          />

          <Text style={{color: '#7D8BB7'}}>Cardio Specialist</Text>
        </View>

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
            <Text style={[{color: '#8B88FF'}, styles.featureTxt]}>20+</Text>

            <Text style={styles.featureTxt2}>Exp. years</Text>
          </TouchableOpacity>

          <View style={styles.featureObj}>
            <Text style={[{color: '#FF9A9A'}, styles.featureTxt]}>284+</Text>
            <Text style={styles.featureTxt2}>Reviews</Text>
          </View>
        </View>

        <View style={styles.abtSec}>
          <Text style={styles.abtTi}>About Doctor</Text>
          <Text style={styles.abtSb}>
            Dr. Naresh Trehan is the top most Cardiologist specialist in Medanta
            hospital Gurugram. She is available for private consultation.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            // justifyContent: 'center',
            marginHorizontal: 10,
            // justifyContent: 'space-between',
            // backgroundColor: 'red',
          }}>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Cardiology</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Gastrology</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Cancer</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Lungs</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Pancreas</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Hypertension</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Skin</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Bones</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Brain</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Legs</Text>
          </View>
          <View style={styles.tagshadow}>
            <Text style={styles.tagtxt}>Hand</Text>
          </View>
        </View>

        <View style={{marginHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text style={[styles.LabName, {}]}>Schedules</Text>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'lightgreen',
                // alignItems: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#8A96BC',
                  fontSize: 14,
                  fontWeight: '500',
                  // backgroundColor: 'green',
                }}>
                August
              </Text>
              <Icon
                type={Icons.Ionicons}
                name={'chevron-down-outline'}
                color="#8A96BC"
                size={26}
              />
            </View>
          </View>
          <ScrollView horizontal style={{marginTop: 10}}>
            <View style={styles.dateCont}>
              <Text style={styles.date}>7</Text>
              <Text style={styles.day}>Sun</Text>
            </View>

            <View style={styles.dateCont}>
              <Text style={styles.date}>8</Text>
              <Text style={styles.day}>Mon</Text>
            </View>

            <View
              style={[
                styles.dateCont,

                {backgroundColor: '#A5ACFC', borderColor: '#A5ACFC'},
              ]}>
              <Text style={[styles.date, {color: 'white'}]}>9</Text>
              <Text style={[styles.day, {color: 'white'}]}>Tue</Text>
            </View>

            <View style={styles.dateCont}>
              <Text style={styles.date}>10</Text>
              <Text style={styles.day}>Wed</Text>
            </View>

            <View style={styles.dateCont}>
              <Text style={styles.date}>11</Text>
              <Text style={styles.day}>Thu</Text>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={[styles.LabName, {marginHorizontal: 10}]}>
            Visit Hours
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 10,
              // marginBottom: 10,
              // backgroundColor: 'lightgreen',
            }}>
            <View style={styles.timeShadow}>
              <Text style={styles.timetxt}>11:00AM</Text>
            </View>
            <View style={styles.timeShadow}>
              <Text style={[styles.timetxt, {color: '#263257'}]}>12:00PM</Text>
            </View>
            <View
              style={[
                styles.timeShadow,
                {backgroundColor: '#A5ACFC', borderColor: '#A5ACFC'},
              ]}>
              <Text style={[styles.timetxt, {color: 'white'}]}>01:00AM</Text>
            </View>
            <View style={styles.timeShadow}>
              <Text style={[styles.timetxt, {color: '#263257'}]}>02:00PM</Text>
            </View>
            <View style={styles.timeShadow}>
              <Text style={[styles.timetxt, {color: '#263257'}]}>03:00PM</Text>
            </View>
            <View style={styles.timeShadow}>
              <Text style={styles.timetxt}>04:00PM</Text>
            </View>
            <View style={styles.timeShadow}>
              <Text style={[styles.timetxt, {color: '#263257'}]}>05:00PM</Text>
            </View>
            <View style={styles.timeShadow}>
              <Text style={[styles.timetxt, {color: '#263257'}]}>06:00PM</Text>
            </View>
          </View>
        </View>
        {/* 
        <TouchableOpacity
          style={{
            backgroundColor: '#A5ACFC',
            borderRadius: 10,
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3,
            marginVertical: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: 20,
              padding: 10,
              textAlign: 'center',
            }}>
            Book Appointment
          </Text>
        </TouchableOpacity> */}

        <LinearGradient
          colors={['#4E54C8', '#8F94FB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            backgroundColor: '#A5ACFC',
            borderRadius: 10,
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3,
            marginVertical: 20,
            paddingLeft: 10,
            paddingRight: 10,
            // borderRadius: 5,

            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 20,
                padding: 10,
                textAlign: 'center',
              }}>
              Book Appointment
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    backgroundColor: '#fffeff',
    // flex: 1,
    paddingBottom: 100,
    // marginBottom: 100,
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
    marginTop: 10,
  },
  featureDock: {
    backgroundColor: '#A5ACFC',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
    // justifyContent: 'space-evenly',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 25,
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
    // margin: 10,
    marginHorizontal: 10,
    marginBottom: 10,
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
    // backgroundColor: 'green',
    textAlign: 'justify',
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
  tagtxt: {
    backgroundColor: 'white',
    borderRadius: 35,
    color: '#080C2F',
    opacity: 0.65,
    paddingHorizontal: 12,

    // paddingVertical: 12,
  },

  tagshadow: {
    borderRadius: 20,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#eef0f0',
    marginHorizontal: 4,
    marginBottom: 6,
    padding: 6,

    // borderRadius: 10,
    // marginBottom: 6,
    // borderWidth: 2,
    // borderColor: '#eef0f0',
  },
  dateCont: {
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#eef0f0',
    borderWidth: 3,
    // margin: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    // elevation: 2,
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    backgroundColor: 'white',
    marginRight: 10,
    marginBottom: 5,
  },
  date: {fontSize: 16, color: '#263257', fontWeight: '600'},
  day: {fontSize: 14, color: '#8A96BC'},

  timeShadow: {
    borderRadius: 10,
    marginBottom: 6,
    borderWidth: 2,
    borderColor: '#eef0f0',
  },
  timetxt: {
    color: '#8A96BC',
    paddingHorizontal: 7,
    paddingVertical: 5,
    // fontSize: 14,
  },
});
