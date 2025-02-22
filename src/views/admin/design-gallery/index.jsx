import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Select,
} from "@chakra-ui/react";

const mockDesigns = [
  { id: 1, title: "Design 1", description: "This is the first design.", category: "Web Design" },
  { id: 2, title: "Design 2", description: "This is the second design.", category: "Graphic Design" },
  { id: 3, title: "Design 3", description: "This is the third design.", category: "Web Design" },
  { id: 4, title: "Design 4", description: "This is the fourth design.", category: "Graphic Design" },
];

export default function DesignGallery() {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const fetchDesigns = async () => {
      setLoading(true);
      try {
        // Simulate fetching designs
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockDesigns);
          }, 1000);
        });
        setDesigns(response);
      } catch (error) {
        setError("Failed to fetch designs.");
      } finally {
        setLoading(false);
      }
    };
    fetchDesigns();
  }, []);

  const filteredDesigns = designs.filter((design) =>
    design.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === "" || design.category === filterCategory)
  );

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex mb='20px' justifyContent='space-between'>
        <Input
          placeholder="Search Designs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mr='10px'
        />
        <Select
          placeholder="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
        </Select>
      </Flex>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <Box mt='20px'>
          {filteredDesigns.map((design) => (
            <Box key={design.id} p='10px' border='1px solid' borderColor='gray.300' mt='10px'>
              <Text fontWeight='bold'>{design.title}</Text>
              <Text>{design.description}</Text>
              <Text fontSize='sm' color='gray.500'>{design.category}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
