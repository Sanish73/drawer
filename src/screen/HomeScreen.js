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

import Icon from 'react-native-vector-icons/Ionicons';


export   function HomeScreen() {
    return (
        <VStack>
            <Text>This is Home </Text>
            <VStack>
            <Icon name="home"  size={24} color='#000' />
            </VStack>
        </VStack>
    )
}
