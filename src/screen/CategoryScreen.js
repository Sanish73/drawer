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
import MyTab from '../components/MyTab';
import SearchBox from '../components/SearchBox';
import Detail from '../components/Detail';
import GrideIcons from '../components/GrideIcons';

export function CategoryScreen() {
    return (
        <VStack>
            <ScrollView>
                <SearchBox/>
                <MyTab/>
                <Detail/>
                <GrideIcons/>
            </ScrollView>

        </VStack>
    )
}
