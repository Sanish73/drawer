import {View, Text} from 'react-native'
import React from 'react'
import {Box, Button, HStack, VStack} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

const FirstRowGride = () => {
    return (
        <HStack bgColor={'green.100'} space={4} justifyContent="center"  alignItems="center" >
            <Box  bgColor={'red.100'}>
                <Box>
                    <Button
                        borderWidth={1}
                        borderColor="#E3E3E3"
                        borderRadius={6}
                        bgColor="#F1F1F1"
                        p={3}
                        alignItems="center"
                        justifyContent="center">
                        <Icon
                            name="home"
                            size={27}
                            color="black"
                            style={{
                            width: 25,
                            height: 25
                        }}/>
                    </Button>
                </Box>
                <Box>
                    <Text>
                        dasdasdasd
                    </Text>
                </Box>
            </Box>

            <Box  >
                <Button
                    borderWidth={1}
                    borderColor="#E3E3E3"
                    borderRadius={6}
                    bgColor="#F1F1F1"
                    p={3}
                    alignItems="center"
                    justifyContent="center">
                    <Icon
                        name="home"
                        size={27}
                        color="black"
                        style={{
                        width: 25,
                        height: 25
                    }}/>
                </Button>
                <Box>
                    <Text>
                        aljdklaskdlk
                    </Text>
                </Box>
            </Box>

            <Box  >
                <Button
                    borderWidth={1}
                    borderColor="#E3E3E3"
                    borderRadius={6}
                    bgColor="#F1F1F1"
                    p={3}
                    alignItems="center"
                    justifyContent="center">
                    <Icon
                        name="home"
                        size={27}
                        color="black"
                        style={{
                        width: 25,
                        height: 25
                    }}/>
                </Button>
                <Box>
                    <Text>
                        aljdklaskdlk
                    </Text>
                </Box>
            </Box>

            <Box  >
                <Button
                    borderWidth={1}
                    borderColor="#E3E3E3"
                    borderRadius={6}
                    bgColor="#F1F1F1"
                    p={3}
                    alignItems="center"
                    justifyContent="center">
                    <Icon
                        name="home"
                        size={27}
                        color="black"
                        style={{
                        width: 25,
                        height: 25
                    }}/>
                </Button>
                <Box>
                    <Text>
                        aljdklaskdlk
                    </Text>
                </Box>
            </Box>

        </HStack>
    )
}

export default FirstRowGride