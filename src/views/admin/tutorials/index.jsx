import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const mockTutorials = [
  { id: 1, title: "Tutorial 1", description: "This is the first tutorial." },
  { id: 2, title: "Tutorial 2", description: "This is the second tutorial." },
];

export default function Tutorials() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      setLoading(true);
      try {
        // Simulate fetching tutorials
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockTutorials);
          }, 1000);
        });
        setTutorials(response);
      } catch (error) {
        setError("Failed to fetch tutorials.");
      } finally {
        setLoading(false);
      }
    };
    fetchTutorials();
  }, []);

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
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
          {tutorials.map((tutorial) => (
            <Box key={tutorial.id} p='10px' border='1px solid' borderColor='gray.300' mt='10px'>
              <Text fontWeight='bold'>{tutorial.title}</Text>
              <Text>{tutorial.description}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
