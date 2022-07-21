import { useNavigation } from '@react-navigation/core'
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';  
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import { auth } from '../Firebase';
import { FontAwesome } from '@expo/vector-icons';
import ObserveScreen from '../Screens/ObserveScreen';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { AntDesign } from '@expo/vector-icons';
function CustomDrawerContent(props) {
    const navigation = useNavigation()
    const scheme=useColorScheme()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.navigate("Login")  
        })
        .catch(error => alert(error.message))
    }
    
    
    return (
      <DrawerContentScrollView {...props}>
          <View style={{ padding: 20,justifyContent:'center'}}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <AntDesign name="user" size={30} color="grey" />
                            <View style={{marginLeft:15, flexDirection:'column',justifyContent:'center',fontSize:40}}>
                                <Text style={{ color:scheme==='dark'?'white':'black',fontSize:20}}>{auth.currentUser?.email}</Text>
                            </View>
                        </View>
            </View>
        <DrawerItemList {...props} />
        <DrawerItem label={()=>(<Text style={{color: 'red'}}>Sign out</Text>)} icon={()=><FontAwesome name="sign-out" size={24} color="red" />} onPress={handleSignOut} style={{ marginTop:570,backgroundColor:scheme==='dark'?'#e4676750':'pink'}}/>
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
    const scheme=useColorScheme()
    return (
        <NavigationContainer theme={scheme==='dark'?DarkTheme:DefaultTheme}>
            <Drawer.Navigator initialRouteName="Main" drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Markets" component={HomeNavigator} options={{ headerShown: false }} />
                <Drawer.Screen name="Watchlist" component={ObserveScreen} options={{ headerShown: false }} onPress={({navigation})=>navigation.navigate("Login",favoriteList)}/>
            </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default DrawerNav
