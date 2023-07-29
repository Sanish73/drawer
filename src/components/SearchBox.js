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
import { Avatar } from "native-base";

export default function SearchBox() {
    return (
        <HStack  bgColor={'red.100'} paddingY={2} paddingX={5} >
            <Box    justifyContent={'center'}   flex={1}>
                <Icon name="grid-outline" size={25} color="black"/>
            </Box>
            <Box w={'60%'} alignItems={'center'} justifyContent={'center'}>
            <Input
                placeholder="Search"
                bgColor="#E8E8E8"
                variant="filled"
                fontSize={18} 
                placeholderTextColor="gray"
                width="100%"
                borderRadius={13}
                py={1}
                px={2}
                InputLeftElement={
                    <Box marginLeft={3}>
                    <Icon size={20} name="md-search-outline" />
                    </Box>
                }
                InputRightElement={ 
                    <Box marginRight={3}>
                    <Icon size={20} name="md-add" />
                    </Box>
                }
                />
            </Box>
            <Box  w={'15%'} alignItems={'flex-end'} justifyContent={'center'} flex={1}>
                <Avatar bg="cyan.500"  size={10} source={{
                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}>
                        TEkkkkkkkkkkkkkkkkkkk
                 </Avatar>
            </Box>
        </HStack>
    );
}
