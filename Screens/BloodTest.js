import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Header from '../Components/Header';
import Icon, {Icons} from '../Components/Icons';
import Hospitals from './Hospitals';
import Filters from '../Components/Filters';

import data from '../Database/data';
import BloodTestCard from '../Components/BloodTestCard';

export default BloodTest = ({}) => {
  return (
    <View style={styles.container}>
      <Header ScreenName={'Blood Test Near You'} />
      <Filters field1={'PRICE'} field2={'RATING'} field3={'NEAR BY'} />
      <FlatList
        data={data.BloodTests}
        renderItem={({item}) => (
          <BloodTestCard
            LabName={item[1]}
            ImageLink={item[2]}
            Txt1={item[3]}
            Txt2={item[4]}
            Time={item[5]}
            Location={item[6]}
            Price={item[7]}
          />
        )}
        keyExtractor={item => item[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
