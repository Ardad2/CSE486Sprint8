import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { authenticateAuthTokens, logoutAuthTokens } from '../store/redux/authTokens';


export default function Settings()
  {

  const authToken = useSelector( (state) => state.authTokens.data[0] ); 

  const dispatch = useDispatch();

  var vacationMode = false;

  function logout() {
    dispatch(logoutAuthTokens());
 }

//settings screen page
//needs to be able to turn on vacation mode which will result
// in no notifications until return of vacation
return ( //returning information for settings page
<View style={styles.container}>
  <Text></Text>
  <View style={styles.buttonContainer}>
         <View style={styles.button} >
         <Button title="My Profile" onPress={logout} color="black"/>
         <Button title="Vacation Mode?" onPress={vacationMode} color="black"/>
            <Button title="Log Out" onPress={logout} color="black"/>
            <Button 
            title ="Save Settings"
            onPress={() => Alert.alert("Save button pressed")} />
        </View>
        </View>
</View>
);
}

if(vacationMode)
{
  //notifications = off
}
else
{
  //notifications = on
}

//save button to save settings upon leaving the page
const styles = StyleSheet.create({
  container:
    {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:
    {
    marginTop: 16,
    backgroundColor: '#F0F0F0',
    flexDirection: "row", 
},
button:
  {
    width: 100,
    marginHorizontal: 8
}
});
