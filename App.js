import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import firebase from '@react-native-firebase/app';
import Login from './app/screens/Login';
import SplashScreen from './app/screens/SplashScreen';
import KeluhanSA from './app/screens/KeluhanSA';
import ListReportSA from './app/screens/ListReportSA';
import BuatkanAkun from './app/screens/BuatkanAkun';
import KelolaAkun from './app/screens/KelolaAkun';
import DetailAkun from './app/screens/DetailAkun';
import HomeAdmin from './app/screens/HomeAdmin';
import KeluhanAdmin from './app/screens/KeluhanAdmin';
import Tanggapan from './app/screens/Tanggapan';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Tanggapan/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
