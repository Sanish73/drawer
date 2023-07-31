import React from 'react';
import {
    View,
    Text,
    Box,
    VStack,
    HStack,
    Popover,
    Button,
    FormControl,
    Input
} from 'native-base';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AddressSection from './AddressSection';
import LevelColumn1 from './LevelColumn1';
import {useNavigation} from '@react-navigation/native';
// import EditDetails from './EditDetails';

const TopHeading = ({CustomerName, CustomerId}) => {
    const navigation = useNavigation();
    const handleTouchStart = () => {
        navigation.navigate('EditDetails');
    };

    const initialFocusRef = React.useRef(null);
    return (
        <HStack alignItems="center" justifyContent="space-between" paddingBottom={5}>
            <VStack>
                <Text fontSize="xl" fontWeight="bold" marginBottom={1}>
                    {CustomerName}
                </Text>
                <Text color="#8D8D8D">Project Number: {CustomerId}</Text>
            </VStack>

            <Popover
                initialFocusRef={initialFocusRef}
                trigger={triggerProps => {
                return <Button
                    {...triggerProps}
                    borderWidth={1}
                    borderColor="#E3E3E3"
                    borderRadius={6}
                    bgColor="#F1F1F1"
                    p={3}
                    width={10}
                    height={10}
                    alignItems="center"
                    justifyContent="center">
                    <Icon name="ellipsis-vertical" size={14} color="black"/>
                </Button>;
            }}>
                <Popover.Content width="40">
                    <Popover.Arrow/>
                    <Popover.Body onTouchStart={handleTouchStart}>Edit Details</Popover.Body>
                </Popover.Content>
            </Popover>

        </HStack>
    );
};

const ContactDetails = ({PhoneNumber, EmailAddress}) => {
    return (
        <HStack maxH={'45px'} w={'88%'}>
            <HStack w={'30%'} marginRight={12}>
                <Box marginRight={2}>
                    <Icon name="call" size={14} color="#8D8D8D"/>
                </Box>
                <Box>
                    <Text color="#8D8D8D">
                        {PhoneNumber}
                    </Text>

                </Box>
            </HStack>
            <HStack w={'70%'}>
                <Box marginRight={2} w={'8%'}>
                    <Icon name="mail" size={14} color="#8D8D8D"/>
                </Box>
                <Box w={'92%'}>
                    <Text color="#8D8D8D">
                        {EmailAddress}
                    </Text>
                </Box>
            </HStack>

        </HStack>
    );
}

const Detail = () => {
    return (

        <Box
            p={3}
            mx={3}
            my={2}
            borderWidth={2}
            borderColor="#E3E3E3"
            borderRadius={5}
            bg="white">
            <TopHeading CustomerName={'HollyFox'} CustomerId={'215646465'}/>

            <ContactDetails
                PhoneNumber={'9844554622'}
                EmailAddress={'thapasanish75@gmail.com'}/>

            <AddressSection
                Location1={'415 Washington AVE nepal,'}
                Location2={'kathmandu ,Nepal'}/>

            <LevelColumn1
                TypeName={'Projected Type'}
                TypeData={'Bathroom,Modeling'}
                RevenueName={'Est Revenue'}
                Total={'$125,654,00.000'}/>
            <LevelColumn1
                TypeName={'Projected Type'}
                TypeData={'Bathroom,Modeling'}
                RevenueName={'Est Revenue'}
                Total={'$125,654,00.000'}/>
        </Box>

    );
};

export default Detail;
