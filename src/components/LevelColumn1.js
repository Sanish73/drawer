import {View} from 'react-native'
import React from 'react'
import {Box, HStack, Text,VStack} from 'native-base'

const LevelColumn1 = ({TypeName, TypeData,RevenueName,Total}) => {
    return (
        <HStack paddingY={1}>
            <VStack w={'50%'}>
                <Box marginBottom={1}>
                    <Text  fontSize="md" >{TypeName}</Text>
                </Box>
                <Box 
                paddingLeft={2}
                 borderWidth={1}
                borderColor="#E3E3E3"
                borderRadius={6}
                bgColor="#F1F1F1"
                minH={7}
                maxH={9}
                justifyContent="center"
                >
                    <Text fontSize="sm" fontWeight='bold'>{TypeData}</Text>

                </Box>
            </VStack>

            {/* //yatekai gap ko lage */}
            <VStack  w={'10%'} >
            </VStack>


            <VStack w={'40%'} >
                <Box marginBottom={1}>
                    <Text fontSize="md" >{RevenueName}</Text>
                </Box>
                <Box 
                paddingLeft={2}
                 borderWidth={1}
                borderColor="#E3E3E3"
                borderRadius={6}
                bgColor="#F1F1F1"
                minH={7}
                maxH={9}
                justifyContent="center">
                    <Text fontSize="sm" fontWeight='bold'>{Total}</Text>
                </Box>
            </VStack>
        </HStack>
    )
}

export default LevelColumn1