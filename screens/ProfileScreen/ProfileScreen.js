//getting ready to add profile
import {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector, dispatch, useDispatch } from 'react-redux';

import { 
  StyleSheet,  
  View, 
  FlatList, Button, Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

//this will be the screen for the profile
//importing the same status bar so it is consistent throughout the app.