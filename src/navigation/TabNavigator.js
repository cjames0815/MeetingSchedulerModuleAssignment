import React from 'react';
import HostScreen from '../screens/Hosts';
import MeetingsScreen from '../screens/AddHost';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle:{display:'none'},
        }}
>
        <Tab.Screen name={'Host'} component={HostScreen}/>
        <Tab.Screen name={'AddHost'} component={AddHostScreen}/>
    </Tab.Navigator>
  );
};
export default TabNavigator;