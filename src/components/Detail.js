import React from 'react';
import {View, Text, Box, VStack, HStack} from 'native-base';

const TopHeading = () => {
    return (
        <HStack p={3} alignItems="center" justifyContent="space-between">
            <VStack>
                <Text fontSize="xl" fontWeight="bold">
                    Holly Flax
                </Text>
                <Text>Project Number: 46546465456</Text>
            </VStack>

            <Box
        borderWidth={1}
        borderColor="brown"
        borderRadius={5}
        bgColor={'blue.100'}
        p={3}
        width={9}
        height={9}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          style={{
            fontSize:10
          }}
          fontWeight="bold"
        //   textAlign="center" // Center the text horizontally
        //   lineHeight={9} // Center the text vertically
        >
          :
        </Text>
      </Box>
        </HStack>
    );
};

const Detail = () => {
    return (
        <Box
            mx={3}
            my={2}
            borderWidth={1}
            borderColor="brown"
            borderRadius={5}
            bg="white">
            <TopHeading/>
        </Box>
    );
};

export default Detail;
