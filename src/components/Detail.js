import React from 'react';
import {View, Text, Box, VStack, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const TopHeading = () => {
    return (
        <HStack p={3} alignItems="center" justifyContent="space-between">
        <VStack>
          <Text fontSize="xl" fontWeight="bold" marginBottom={1}>
            Holly Flax
          </Text>
          <Text color="#8D8D8D">Project Number: 46546465456</Text>
        </VStack>
  
        <Box
          borderWidth={1}
          borderColor="#E3E3E3"
          borderRadius={6}
          bgColor="#F1F1F1"
          p={3}
          width={10}
          height={10}
          alignItems="center"
          justifyContent="center"
        >
           {/* Use the Icon component from react-native-vector-icons */}
        <Icon name="ellipsis-vertical" size={14} color="black" />
        </Box>
      </HStack>
    );
};

const Detail = () => {
    return (
        <Box
            mx={3}
            my={2}
            borderWidth={2}
            borderColor="#E3E3E3"
            borderRadius={5}
            bg="white">
            <TopHeading/>
        </Box>
    );
};

export default Detail;
