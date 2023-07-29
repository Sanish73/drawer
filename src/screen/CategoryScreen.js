import React from 'react';
import {
    Text,
    Box,
    VStack,
    Center,
    HStack,
    Button,
    Heading,
    useColorMode,
    Input
} from 'native-base';
import {
    View,
    StyleSheet,
    Alert,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import HomeSearchBox from '../components/HomeSearchBox';


export function CategoryScreen() {
    return (
        <VStack>
         <HomeSearchBox/>
          
        </VStack>
    )
}
