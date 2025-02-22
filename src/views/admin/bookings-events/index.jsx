import { Box, SimpleGrid } from "@chakra-ui/react";
import EventList from "views/admin/bookings-events/components/EventList";
import EventDetails from "views/admin/bookings-events/components/EventDetails";
import React from "react";

export default function BookingsEvents() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <EventList />
        <EventDetails />
      </SimpleGrid>
    </Box>
  );
}
