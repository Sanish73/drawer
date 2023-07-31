import {View, Text} from 'react-native'
import React from 'react'
import FirstRowGride from './FirstRowGride'
import {Box} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

const GrideIcons = () => {
    return (
        <Box p={3} mx={3} my={2}>
           
            <FirstRowGride/> 
                
            {/* <SecondRowGrid />  */}

        </Box>
    )
}

export default GrideIcons