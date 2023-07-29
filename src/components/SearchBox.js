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
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBox() {
    return (
        <HStack paddingY={2} paddingX={5} >
            <Box    justifyContent={'center'}   flex={1}>
                <Icon name="grid-outline" size={25} color="black"/>
            </Box>
            <Box w={'60%'} alignItems={'center'} justifyContent={'center'}>
            <Input
                placeholder="Search"
                bgColor="#E8E8E8"
                variant="filled"
                fontSize={18} // Set the font size for the placeholder
                placeholderTextColor="gray"
                width="100%"
                borderRadius={13}
                py={1}
                px={2}
                
                InputLeftElement={
            <Box marginLeft={3}>
                  <Icon size={20} name="md-search-outline" />
             </Box>}/>
            </Box>
            <Box  w={'15%'} alignItems={'flex-end'} justifyContent={'center'} flex={1}>
                <Icon name="scan" size={30}/>
            </Box>
        </HStack>
    );
}
