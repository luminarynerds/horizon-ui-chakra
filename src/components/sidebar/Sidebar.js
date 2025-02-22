import React, { useState } from "react";

// chakra imports
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

// Assets
import {
  FaTachometerAlt,
  FaUserFriends,
  FaBookOpen,
  FaChartPie,
  FaEnvelope,
  FaCogs,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

function Sidebar(props) {
  const { routes } = props;

  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  let sidebarBg = useColorModeValue("white", "navy.800");
  let sidebarMargins = "0px";

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCRMExpanded, setIsCRMExpanded] = useState(false);
  const [isELearningExpanded, setIsELearningExpanded] = useState(false);
  const [isMarketingExpanded, setIsMarketingExpanded] = useState(false);
  const [isEventManagementExpanded, setIsEventManagementExpanded] = useState(false);
  const [isDesignGalleryExpanded, setIsDesignGalleryExpanded] = useState(false);
  const [isAIToolsExpanded, setIsAIToolsExpanded] = useState(false);
  const [isTutorialsExpanded, setIsTutorialsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // SIDEBAR
  return (
    <Box
      display={{ sm: "none", xl: "block" }}
      w="100%"
      position="fixed"
      minH="100%"
    >
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w={isCollapsed ? "80px" : "250px"}
        h="100vh"
        m={sidebarMargins}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
        p={4}
      >
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
          onClick={toggleSidebar}
          mb={4}
        />
        <Stack spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            {!isCollapsed && <FaTachometerAlt />} {isCollapsed ? "" : "Dashboard"}
          </Text>
          <Text
            fontSize="lg"
            onClick={() => setIsCRMExpanded(!isCRMExpanded)}
          >
            {!isCollapsed && <FaUserFriends />} {isCollapsed ? "" : "CRM"}
          </Text>
          {isCRMExpanded && (
            <Stack spacing={2} pl={4}>
              <Text>{!isCollapsed && "Contacts"}</Text>
              <Text>{!isCollapsed && "Leads"}</Text>
              <Text>{!isCollapsed && "Opportunities"}</Text>
              <Text>{!isCollapsed && "Reports"}</Text>
            </Stack>
          )}
          <Text
            fontSize="lg"
            onClick={() => setIsELearningExpanded(!isELearningExpanded)}
          >
            {!isCollapsed && <FaBookOpen />} {isCollapsed ? "" : "E-Learning"}
          </Text>
          {isELearningExpanded && (
            <Stack spacing={2} pl={4}>
              <Text>{!isCollapsed && "Course Catalog"}</Text>
              <Text>{!isCollapsed && "My Courses"}</Text>
              <Text>{!isCollapsed && "Create Course"}</Text>
              <Text>{!isCollapsed && "Student Management"}</Text>
            </Stack>
          )}
          <Text
            fontSize="lg"
            onClick={() => setIsMarketingExpanded(!isMarketingExpanded)}
          >
            {!isCollapsed && <FaChartPie />} {isCollapsed ? "" : "Marketing"}
          </Text>
          {isMarketingExpanded && (
            <Stack spacing={2} pl={4}>
              <Text>{!isCollapsed && "Campaigns"}</Text>
              <Text>{!isCollapsed && "Email Marketing"}</Text>
              <Text>{!isCollapsed && "Social Media Integration"}</Text>
              <Text>{!isCollapsed && "Analytics"}</Text>
            </Stack>
          )}
          <Text
            fontSize="lg"
            onClick={() =>
              setIsEventManagementExpanded(!isEventManagementExpanded)
            }
          >
            {!isCollapsed && <FaEnvelope />}{" "}
            {isCollapsed ? "" : "Event Management"}
          </Text>
          {isEventManagementExpanded && (
            <Stack spacing={2} pl={4}>
              <Text>{!isCollapsed && "Bookings & Events"}</Text>
              <Text>{!isCollapsed && "Event Planner"}</Text>
              <Text>{!isCollapsed && "Community Forum"}</Text>
            </Stack>
          )}
          <Text
            fontSize="lg"
            onClick={() => setIsDesignGalleryExpanded(!isDesignGalleryExpanded)}
          >
            {!isCollapsed && <FaBookOpen />}{" "}
            {isCollapsed ? "" : "Design Gallery"}
          </Text>
          {isDesignGalleryExpanded && (
            <Stack spacing={2} pl={4}>
              <Text>{!isCollapsed && "Gallery"}</Text>
            </Stack>
          )}
          <Text
            fontSize="lg"
            onClick={() => setIsAIToolsExpanded(!isAIToolsExpanded)}
          >
            {!isCollapsed && <FaChartPie />} {isCollapsed ? "" : "AI Tools"}
          </Text>
          {isAIToolsExpanded && (
            <Stack spacing={2} pl={4}>
              <Text>{!isCollapsed && "AI Caption Generator"}</Text>
              <Text>{!isCollapsed && "Contextual Insights"}</Text>
            </Stack>
          )}
          <Text
            fontSize="lg"
            onClick={() => setIsTutorialsExpanded(!isTutorialsExpanded)}
          >
            {!isCollapsed && <FaBookOpen />} {isCollapsed ? "" : "Tutorials"}
          </Text>
          {isTutorialsExpanded && (
            <Stack spacing={2} pl={4}>
              <Text>{!isCollapsed && "Balloon Art Trends"}</Text>
            </Stack>
          )}
          <Text fontSize="lg">
            {!isCollapsed && <FaCogs />} {isCollapsed ? "" : "Settings"}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

// FUNCTIONS
export function SidebarResponsive(props) {
  let sidebarBackgroundColor = useColorModeValue("white", "navy.800");
  let menuColor = useColorModeValue("gray.400", "white");
  // // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { routes } = props;
  // let isWindows = navigator.platform.startsWith("Win");
  //  BRAND

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCRMExpanded, setIsCRMExpanded] = useState(false);
  const [isELearningExpanded, setIsELearningExpanded] = useState(false);
  const [isMarketingExpanded, setIsMarketingExpanded] = useState(false);
  const [isEventManagementExpanded, setIsEventManagementExpanded] = useState(false);
  const [isDesignGalleryExpanded, setIsDesignGalleryExpanded] = useState(false);
  const [isAIToolsExpanded, setIsAIToolsExpanded] = useState(false);
  const [isTutorialsExpanded, setIsTutorialsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Flex display={{ sm: "flex", xl: "none" }} alignItems="center">
      <Flex ref={btnRef} w="max-content" h="max-content" onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w="285px" maxW="285px" bg={sidebarBackgroundColor}>
          <DrawerCloseButton
            zIndex="3"
            onClose={onClose}
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="285px" px="0rem" pb="0">
            <IconButton
              aria-label="Toggle Sidebar"
              icon={isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
              onClick={toggleSidebar}
              mb={4}
            />
            <Stack spacing={4} p={4}>
              <Text fontSize="xl" fontWeight="bold">
                {!isCollapsed && <FaTachometerAlt />}{" "}
                {isCollapsed ? "" : "Dashboard"}
              </Text>
              <Text
                fontSize="lg"
                onClick={() => setIsCRMExpanded(!isCRMExpanded)}
              >
                {!isCollapsed && <FaUserFriends />} {isCollapsed ? "" : "CRM"}
              </Text>
              {isCRMExpanded && (
                <Stack spacing={2} pl={4}>
                  <Text>{!isCollapsed && "Contacts"}</Text>
                  <Text>{!isCollapsed && "Leads"}</Text>
                  <Text>{!isCollapsed && "Opportunities"}</Text>
                  <Text>{!isCollapsed && "Reports"}</Text>
                </Stack>
              )}
              <Text
                fontSize="lg"
                onClick={() => setIsELearningExpanded(!isELearningExpanded)}
              >
                {!isCollapsed && <FaBookOpen />} {isCollapsed ? "" : "E-Learning"}
              </Text>
              {isELearningExpanded && (
                <Stack spacing={2} pl={4}>
                  <Text>{!isCollapsed && "Course Catalog"}</Text>
                  <Text>{!isCollapsed && "My Courses"}</Text>
                  <Text>{!isCollapsed && "Create Course"}</Text>
                  <Text>{!isCollapsed && "Student Management"}</Text>
                </Stack>
              )}
              <Text
                fontSize="lg"
                onClick={() => setIsMarketingExpanded(!isMarketingExpanded)}
              >
                {!isCollapsed && <FaChartPie />} {isCollapsed ? "" : "Marketing"}
              </Text>
              {isMarketingExpanded && (
                <Stack spacing={2} pl={4}>
                  <Text>{!isCollapsed && "Campaigns"}</Text>
                  <Text>{!isCollapsed && "Email Marketing"}</Text>
                  <Text>{!isCollapsed && "Social Media Integration"}</Text>
                  <Text>{!isCollapsed && "Analytics"}</Text>
                </Stack>
              )}
              <Text
                fontSize="lg"
                onClick={() =>
                  setIsEventManagementExpanded(!isEventManagementExpanded)
                }
              >
                {!isCollapsed && <FaEnvelope />}{" "}
                {isCollapsed ? "" : "Event Management"}
              </Text>
              {isEventManagementExpanded && (
                <Stack spacing={2} pl={4}>
                  <Text>{!isCollapsed && "Bookings & Events"}</Text>
                  <Text>{!isCollapsed && "Event Planner"}</Text>
                  <Text>{!isCollapsed && "Community Forum"}</Text>
                </Stack>
              )}
              <Text
                fontSize="lg"
                onClick={() => setIsDesignGalleryExpanded(!isDesignGalleryExpanded)}
              >
                {!isCollapsed && <FaBookOpen />}{" "}
                {isCollapsed ? "" : "Design Gallery"}
              </Text>
              {isDesignGalleryExpanded && (
                <Stack spacing={2} pl={4}>
                  <Text>{!isCollapsed && "Gallery"}</Text>
                </Stack>
              )}
              <Text
                fontSize="lg"
                onClick={() => setIsAIToolsExpanded(!isAIToolsExpanded)}
              >
                {!isCollapsed && <FaChartPie />} {isCollapsed ? "" : "AI Tools"}
              </Text>
              {isAIToolsExpanded && (
                <Stack spacing={2} pl={4}>
                  <Text>{!isCollapsed && "AI Caption Generator"}</Text>
                  <Text>{!isCollapsed && "Contextual Insights"}</Text>
                </Stack>
              )}
              <Text
                fontSize="lg"
                onClick={() => setIsTutorialsExpanded(!isTutorialsExpanded)}
              >
                {!isCollapsed && <FaBookOpen />} {isCollapsed ? "" : "Tutorials"}
              </Text>
              {isTutorialsExpanded && (
                <Stack spacing={2} pl={4}>
                  <Text>{!isCollapsed && "Balloon Art Trends"}</Text>
                </Stack>
              )}
              <Text fontSize="lg">
                {!isCollapsed && <FaCogs />} {isCollapsed ? "" : "Settings"}
              </Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

// PROPS

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};

export default Sidebar;
