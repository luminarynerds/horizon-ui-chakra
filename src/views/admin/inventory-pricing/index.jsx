import { Box, SimpleGrid } from "@chakra-ui/react";
import InventoryList from "views/admin/inventory-pricing/components/InventoryList";
import PricingTable from "views/admin/inventory-pricing/components/PricingTable";
import React from "react";

export default function InventoryPricing() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <InventoryList />
        <PricingTable />
      </SimpleGrid>
    </Box>
  );
}
