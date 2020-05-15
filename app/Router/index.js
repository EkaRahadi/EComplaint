import * as React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

//Stack
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Home from '../screens/Home';
import HomeAdmin from '../screens/HomeAdmin';
import BuatkanAkun from '../screens/BuatkanAkun';
import KelolaAkun from '../screens/KelolaAkun';
import DetailAkun from '../screens/DetailAkun';
import Tanggapan from '../screens/Tanggapan';
import ListReportSA from '../screens/ListReportSA';
import KeluhanSA from '../screens/KeluhanSA';
import KeluhanAdmin from '../screens/KeluhanAdmin';

const Stack = createStackNavigator();

export default class Router extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name="Splashscreen" component={SplashScreen}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="HomeSuperAdmin" component={Home}/>
            <Stack.Screen name="HomeAdmin" component={HomeAdmin}/>
            <Stack.Screen name="BuatAkun" component={BuatkanAkun}/>
            <Stack.Screen name="KelolaAkun" component={KelolaAkun}/>
            <Stack.Screen name="DetailKelolaAkun" component={DetailAkun}/>
            <Stack.Screen name="Report" component={ListReportSA}/>
            <Stack.Screen name="KeluhanSuperAdmin" component={KeluhanSA}/>
            <Stack.Screen name="KeluhanAdmin" component={KeluhanAdmin}/>
            <Stack.Screen name="Tanggapan" component={Tanggapan}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  }