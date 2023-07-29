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

import SearchBox from '../components/SearchBox';

export function CategoryScreen() {
    return (
        <VStack>
         <SearchBox/>
          
        </VStack>
    )
}
