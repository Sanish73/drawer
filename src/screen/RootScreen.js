import { View, Text } from 'react-native';
import React from 'react';

import { CategoryScreen } from './CategoryScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const RootScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        activeTintColor: '#3a82fe',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          var fontSize = 27;

          if (route.name === 'Home') {
            iconName = focused ? 'podium' : 'podium';
          } else if (route.name == 'Category') {
            fontSize = 24;
            iconName = focused ? 'grid' : 'grid-outline';
          }

          return <Icon name={iconName} size={fontSize} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: 'white',
        },
      })}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Category" component={CategoryScreen} />
    </Tab.Navigator>
  );
};

export default RootScreen;
