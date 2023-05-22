import React from 'react';

import {NativeBaseProvider} from 'native-base';

import {RootTagContext, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootScreen from './screen/RootScreen';


function AppBox() {
    const Stack = createNativeStackNavigator();
    return (
        
<NavigationContainer>
  
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Root" component={RootScreen} />

    </Stack.Navigator>
 
</NavigationContainer>
    );
}

export default function App() {


    return (
        <SafeAreaView style={{ flex: 1 }}> 
        <NativeBaseProvider>
            <AppBox/>

        </NativeBaseProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
});
