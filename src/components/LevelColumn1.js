import {View, Text} from 'react-native'
import React from 'react'
import {Box, HStack, VStack} from 'native-base'

const LevelColumn1 = () => {
    return (
        <HStack>
            <VStack w={'60%'}>
                <Box>
                    <Text fontSize="xl" fontWeight='bold'>Projected Type</Text>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight='bold'>Bathroom  Modeling</Text>

                </Box>
            </VStack>


            <VStack w={'40%'}>
                <Box>
                    <Text fontSize="xl" fontWeight='bold'>Est Revenue</Text>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight='bold'>$512,545,64</Text>

                </Box>
            </VStack>
        </HStack>
    )
}

export default LevelColumn1