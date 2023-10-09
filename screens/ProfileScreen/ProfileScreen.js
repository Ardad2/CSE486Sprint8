
//getting ready to add profile
/*
import {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, dispatch, useDispatch } from 'react-redux';
import { 
  StyleSheet,  
  View, 
  FlatList, Button, Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
*/

// This screen is where the user will see their profile
// importing the same status bar so it is consistent throughout the app.

import {View, Text, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { incrementBehavior, decrementBehavior } from '../../store/redux/users';

function ProfileScreen( {route, navigation} ) // function where the profile screen can be viewed
{
    const dispatch = useDispatch(); 

    const authToken = useSelector( (state) => state.authTokens.data[0] );

    //const behaviorList = useSelector( (state) => state.users.users[0].behaviors );
    
    const userList = useSelector( (state) => state.users.users);
    const currUser = userList.filter( user => user.username == authToken.email );
    const behaviorList = currUser[0].behaviors;

    var behaviorIndex = 0;

    for ( var i = 0; i < behaviorList.length ; i++ )
    {                
        if ( behaviorList[i].name == route.params.name ) 
        {
            behaviorIndex = i;
        }
    }


    const name = route.params.name;
  
    // tracks goals being completed or removed
    function decrementGoalCount()
      {
        dispatch(decrementBehavior(
            {
                username: authToken.email,
                behaviorName: name
            }
          ));
     }

    // tracks goals being added
     function incrementGoalCount()
     {
        dispatch(incrementBehavior(
            {
                username: authToken.email,
                behaviorName: name
            }
          ));
    }

    // print html
    return (
        <View> 
        <Text>{behaviorList[behaviorIndex].name}</Text>
        <Text>{behaviorList[behaviorIndex].date}</Text>
        <View style={styles.buttonContainer}>
             <View style={styles.button} >
                <Button title="+" onPress={incrementGoalCount} color="black"/>
            </View>
            <Text>{behaviorList[behaviorIndex].count} / {behaviorList[behaviorIndex].goalCount}</Text>
            <View style={styles.button} >
                <Button title="-" onPress={decrementGoalCount} color="black"/>
            </View>
            </View>
        </View>
    )
}

// styling for ui the use will see
const styles = StyleSheet.create({
    inputContainer:
    {
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    },
    textInput:
    {
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 8
      borderWidth: 1,
      borderColor: '#F0F0F0',
      backgroundColor: '#F0F0F0'
    },
    buttonContainer:
    {
        marginTop: 16, 
        backgroundColor: '#FFFFFF', 
        flexDirection: "row", 
    },
    button:
    {
        width: 100, 
        marginHorizontal: 8 
    },
    textStyle:
    {
      fontWeight: 'bold', 
      padding: 10 
    }
  });
  

export default ProfileScreen;

