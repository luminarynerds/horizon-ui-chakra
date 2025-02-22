import React from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

export default function DashboardStatistics() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");

  return (
    <Box
      p='20px'
      bg={useColorModeValue("white", "navy.700")}
      rounded='20px'
      shadow='xl'>
      <Flex direction='column'>
        <Stat me='auto'>
          <StatLabel
            fontSize='sm'
            color={textColorSecondary}
            fontWeight='500'
            mb='4px'>
            Total Events
          </StatLabel>
          <Flex>
            <StatNumber
              fontSize='2xl'
              color={textColor}
              fontWeight='700'>
              125
            </StatNumber>
          </Flex>
        </Stat>
      </Flex>
    </Box>
  );
}
