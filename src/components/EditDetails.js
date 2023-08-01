import {Alert, View} from 'react-native'
import React from 'react'
import {
    Box,
    HStack,
    Input,
    Text,
    VStack,
    Button
} from 'native-base'

const FirstSection = ({Heading, placeholder}) => {
    return (
        <VStack paddingY={1}>
            <Box marginBottom={2}>
                <Text>
                    {Heading}
                </Text>
            </Box>
            <Box>
                <Input variant="outline" placeholder={'placeholder'}/>
            </Box>
        </VStack>
    );
}

const SecondSection = ({FirstHeading, SecondHeading, FirstPlaceHolder, SecondPlaceHolder}) => {
    return (
        <HStack paddingY={2}>
            <VStack width={'47%'}>
                <Text marginBottom={2}>
                    {FirstHeading}
                </Text>
                <Box>
                    <Input variant="outline" placeholder={FirstPlaceHolder}/>
                </Box>
            </VStack>

            <VStack width={'6%'}></VStack>

            <VStack width={'47%'}>
                <Text marginBottom={2}>
                    {SecondHeading}
                </Text>
                <Box>
                    <Input variant="outline" placeholder={SecondPlaceHolder}/>
                </Box>
            </VStack>
        </HStack>
    );
}

const EditDetails = () => {

    const UpdatePressed =()=>{
        return(
            Alert.alert('hi')
        );
    }
    return (
        <VStack p={3} mx={3} my={2}>
            <FirstSection Heading={'Time Type'} placeholder={'Regular'}/>
            <SecondSection
                FirstHeading={'Project'}
                SecondHeading={'Task'}
                FirstPlaceHolder={'SelectOne'}
                SecondPlaceHolder={'SelectOne'}/>

            <Box paddingY={3}>
                <Button onPress={UpdatePressed}>Update</Button>
            </Box>
        </VStack>
    )
}

export default EditDetails