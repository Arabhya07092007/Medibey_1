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
import LinearGradient from 'react-native-linear-gradient';

export default Filters = ({navigation, field1, field2, field3}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4E54C8', '#8F94FB']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>ALL</Text>
      </LinearGradient>

      <View style={styles.box}>
        <Text style={styles.fieldtxt}>{field1}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.fieldtxt}>{field2}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.fieldtxt}>{field3}</Text>
      </View>
      <Icon type={Icons.Feather} name={'x-circle'} color="#4E54C8" size={23} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // margin: 10,
    marginHorizontal: 10,
    marginBottom: 5,
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
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    paddingVertical: 3,
    fontSize: 12,
  },
  box: {
    borderWidth: 1.5,
    borderColor: '#4E54C8',
    borderRadius: 6,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
  fieldtxt: {
    color: 'black',
    fontSize: 12,
  },
});
