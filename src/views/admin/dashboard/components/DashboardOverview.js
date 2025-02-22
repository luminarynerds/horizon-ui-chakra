import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function DashboardOverview() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");

  return (
    <Box p='20px' bg={boxBg} rounded='20px'>
      <Flex direction='column'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Overview
        </Text>
        <Flex mt='20px'>
          <Text
            color={textColor}
            fontSize='md'
            fontWeight='500'
            lineHeight='100%'>
            Welcome to your balloon business dashboard!
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
