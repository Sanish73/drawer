import {View} from 'react-native'
import React from 'react'
import {VStack, Box, HStack ,Text} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

const AddressSection = ({Location1 , Location2}) => {
    return (
        <HStack paddingY={2}>
            <Box alignItems="center" justifyContent={'center'} w={'11%'} >
                <Icon name="location" size={19} color="#29B6F6"/>
            </Box>
            <VStack>
                <Box >
                    <Text color="#29B6F6" >{Location1}</Text>
                </Box>
                <Box>
                    <Text color="#29B6F6">{Location2}</Text>
                </Box>
            </VStack>
        </HStack>
    )
}

export default AddressSection