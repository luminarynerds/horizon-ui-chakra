import React from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from "@chakra-ui/react";
import SidebarContent from "./components/SidebarContent"; // ✅ This will now work!

const Sidebar = (props) => {
  return <SidebarContent {...props} />;
};

// Add SidebarResponsive for mobile view
export const SidebarResponsive = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <SidebarContent />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
