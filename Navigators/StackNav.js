import * as React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {Image, Text, View, Button, TouchableOpacity} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon, {Icons} from '../Components/Icons';

// Screen Imports
import HomeScreen from '../Screens/HomeScreen';
import Doctor from '../Screens/Doctor';
import BloodBank from '../Screens/BloodBank';
import LabProfile from '../Screens/LabProfile';
import BloodBProfile from '../Screens/BloodBProfile';
import DoctorProfile from '../Screens/DoctorProfile';
import Hospitals from '../Screens/Hospitals';
import HospitalProfile from '../Screens/HospitalProfile';
import BloodTest from '../Screens/BloodTest';
import Pharmacy from '../Screens/Pharmacy';
import PharmacyProfile from '../Screens/PharmacyProfile';
import AppointmentField from '../Screens/AppointmentField';

const Stack = createStackNavigator();

export default function StackNav() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#1F0A51',
        // headerShown: false,

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="HomScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="LabProfile" component={LabProfile} />
      <Stack.Screen
        name="Doctor"
        component={Doctor}
        options={{
          headerTitle: 'Doctor Near You',
        }}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{
          headerTitle: 'Doctor Profile',
        }}
      />
      <Stack.Screen
        name="BloodBank"
        component={BloodBank}
        options={{
          headerTitle: 'Blood Banks Near You',
        }}
      />
      <Stack.Screen
        name="BloodBProfile"
        component={BloodBProfile}
        options={{
          headerTitle: 'Blood Bank',
        }}
      />
      <Stack.Screen
        name="Hospitals"
        component={Hospitals}
        options={{
          headerTitle: 'Hospitals Near You',
        }}
      />
      <Stack.Screen
        name="HospitalProfile"
        component={HospitalProfile}
        options={{
          headerTitle: 'Hospital Proflie',
        }}
      />
      <Stack.Screen
        name="Pharmacy"
        component={Pharmacy}
        options={{
          headerTitle: 'Pharmacy Near You',
        }}
      />
      <Stack.Screen
        name="PharmacyProfile"
        component={PharmacyProfile}
        options={{
          headerTitle: 'Pharmacy Profile',
        }}
      />
      <Stack.Screen
        name="AppointmentField"
        component={AppointmentField}
        options={{
          headerTitle: 'Appointments',
        }}
      />
    </Stack.Navigator>
  );
}
