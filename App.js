import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/pages/Home';
import MyPage from './src/pages/MyPage';
import Settings from './src/pages/Settings';

function Main() {
  return (
    <View>
      <Home />
      <MyPage />
      <Settings />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home" drawerStyle={{ backgroundColor: '#f7edf0' }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'grey',
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Home' }} />
        <Drawer.Screen name="MyPage" component={MyPage} options={{ drawerLabel: 'MyPage' }} />
        <Drawer.Screen name="Settings" component={Settings} options={{ drawerLabel: 'Settings' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}