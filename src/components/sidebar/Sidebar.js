import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaBookOpen,
  FaChartPie,
  FaEnvelope,
  FaCogs,
} from "react-icons/fa";

const SidebarContent = (props) => {
  const location = useLocation();
  const activeBg = useColorModeValue("gray.100", "gray.700");
  const inactiveBg = useColorModeValue("transparent", "transparent");
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("gray.500", "gray.400");

  const navItems = [
    { name: 'Dashboard', icon: FaTachometerAlt, path: '/admin/dashboard' },
    { name: 'CRM', icon: FaUserFriends, path: '/admin/crm' },
    { name: 'E-Learning', icon: FaBookOpen, path: '/admin/elearning' },
    { name: 'Marketing', icon: FaChartPie, path: '/admin/marketing' },
    { name: 'Event Management', icon: FaEnvelope, path: '/admin/event-management' },
    { name: 'AI Tools', icon: FaCogs, path: '/admin/ai-tools' },
  ];

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="100vh"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="250px"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue('brand.500', 'white')}
          fontWeight="semibold"
        >
          Horizon UI
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <RouterLink to={item.path} key={item.name}>
              <Box
                display="flex"
                align="center"
                px="4"
                py="3"
                cursor="pointer"
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                bg={isActive ? activeBg : inactiveBg}
                color={isActive ? activeColor : inactiveColor}
                _hover={{
                  bg: activeBg,
                  color: activeColor,
                }}
              >
                <Icon
                  mr="4"
                  fontSize="16"
                  as={item.icon}
                />
                {item.name}
              </Box>
            </RouterLink>
          );
        })}
      </Flex>
    </Box>
  );
};

const Sidebar = (props) => {
  return <SidebarContent {...props} />;
};

export default Sidebar;