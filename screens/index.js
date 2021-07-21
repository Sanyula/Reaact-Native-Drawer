import React from 'react';
import Screen from './Screen';
import {Text,View } from 'react-native';
import Home from './Home';
import Carousel from './Carousel';

export const HomeScreen = ({navigation}) => <Carousel navigation={navigation} name="Home" />
//export const HomeScreen = ({navigation}) => <Home navigation={navigation} name="Home" />
export const ProfileScreen = ({navigation}) =><Screen navigation={navigation} name="Profile" />
export const MessagesScreen = ({navigation}) =><Screen navigation={navigation} name="Messages" />
export const ActivityScreen = ({navigation}) =><Screen navigation={navigation} name="Activity" />
export const ReportScreen = ({navigation}) =><Screen navigation={navigation} name="Report" />
export const StatisticsScreen = ({navigation}) =><Screen navigation={navigation} name="Stats" />
export const ResetScreen = ({navigation}) =><Screen navigation={navigation} name="Reset Password" />
export const TestScreen = ({navigation}) =><Screen navigation={navigation} name="Test Screen" />