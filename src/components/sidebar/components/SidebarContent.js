import React from "react";
import { Box, Flex, Text, Icon, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUserFriends, FaBookOpen, FaChartPie, FaEnvelope, FaCogs, FaChevronDown } from "react-icons/fa";

const SidebarContent = (props) => {
  const location = useLocation();
  const activeBg = useColorModeValue("teal.100", "teal.700");
  const inactiveBg = useColorModeValue("transparent", "transparent");
  const activeColor = useColorModeValue("teal.700", "white");
  const inactiveColor = useColorModeValue("gray.500", "gray.400");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  const navItems = [
    { name: 'Dashboard', icon: FaTachometerAlt, path: '/admin/dashboard' },
    { 
      name: 'CRM', 
      icon: FaUserFriends,
      subItems: [
        { name: 'Customers', path: '/admin/crm/customers' },
        { name: 'Contacts', path: '/admin/crm/contacts' },
        { name: 'Deals', path: '/admin/crm/deals' }
      ]
    },
    { 
      name: 'E-Learning', 
      icon: FaBookOpen,
      subItems: [
        { name: 'Courses', path: '/admin/elearning/courses' },
        { name: 'Lessons', path: '/admin/elearning/lessons' },
        { name: 'Quizzes', path: '/admin/elearning/quizzes' }
      ]
    },
    { 
      name: 'Marketing', 
      icon: FaChartPie,
      subItems: [
        { name: 'Campaigns', path: '/admin/marketing/campaigns' },
        { name: 'Analytics', path: '/admin/marketing/analytics' },
        { name: 'Email Templates', path: '/admin/marketing/email-templates' }
      ]
    },
    { name: 'Event Management', icon: FaEnvelope, path: '/admin/event-management' },
    { 
      name: 'AI Tools', 
      icon: FaCogs,
      subItems: [
        { name: 'Chat Assistant', path: '/admin/ai-tools/chat' },
        { name: 'Image Generator', path: '/admin/ai-tools/image' },
        { name: 'Analytics', path: '/admin/ai-tools/analytics' }
      ]
    },
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
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      borderRightWidth="1px"
      w="250px"
      {...props}
    >
      <Flex 
        px="4" 
        py="5" 
        align="center"
        borderBottomWidth="1px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue('teal.500', 'teal.200')}
          fontWeight="bold"
          letterSpacing="tight"
        >
          Horizon UI
        </Text>
      </Flex>

      <Flex direction="column" as="nav" fontSize="sm" color="gray.600" aria-label="Main navigation" mt={4}>
        <Accordion allowToggle reduceMotion>
          {navItems.map((item) => (
            item.subItems ? (
              <AccordionItem key={item.name} border="none">
                <AccordionButton px="4" py="3" mx="2" borderRadius="lg" transition="all 0.2s">
                  <Flex align="center" flex="1">
                    <Icon mr="3" boxSize="5" as={item.icon} />
                    <Text fontSize="md">{item.name}</Text>
                  </Flex>
                  <AccordionIcon as={FaChevronDown} boxSize="3" />
                </AccordionButton>

                <AccordionPanel pb={0} pl={8}>
                  {item.subItems.map((subItem) => (
                    <RouterLink to={subItem.path} key={subItem.name}>
                      <Box display="flex" align="center" px="3" py="2" mb="1" borderRadius="lg" cursor="pointer">
                        <Text fontSize="sm">{subItem.name}</Text>
                      </Box>
                    </RouterLink>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ) : (
              <RouterLink to={item.path} key={item.name}>
                <Box display="flex" align="center" px="4" py="3" mx="2" borderRadius="lg" cursor="pointer">
                  <Icon mr="3" boxSize="5" as={item.icon} />
                  <Text fontSize="md">{item.name}</Text>
                </Box>
              </RouterLink>
            )
          ))}
        </Accordion>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
