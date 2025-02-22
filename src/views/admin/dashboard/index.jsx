import { Box, SimpleGrid } from "@chakra-ui/react";
import DashboardStatistics from "views/admin/dashboard/components/DashboardStatistics";
import DashboardOverview from "views/admin/dashboard/components/DashboardOverview";
import React from "react";

export default function Dashboard() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <DashboardStatistics />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <DashboardOverview />
      </SimpleGrid>
    </Box>
  );
}
