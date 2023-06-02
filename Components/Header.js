import React from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import Icon, {Icons} from './Icons';

export default Header = ({ScreenName}) => {
  return (
    <View style={{backgroundColor: 'white', paddingBottom: 10}}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View
        style={{
          flexDirection: 'row',
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
            marginLeft: 10,
            justifyContent: 'flex-end',
          }}>
          <Icon
            type={Icons.Ionicons}
            name={'arrow-back-outline'}
            color="#1F0A51"
            size={27}
          />
        </View>
        <View
          style={{
            flex: 0.88,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 23,
              color: '#1F0A51',
              fontWeight: '500',
            }}>
            {ScreenName}
          </Text>
        </View>
      </View>
    </View>
  );
};
