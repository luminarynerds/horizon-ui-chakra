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

const mockTrends = [
  { id: 1, title: "Trend 1", description: "This is the first balloon art trend." },
  { id: 2, title: "Trend 2", description: "This is the second balloon art trend." },
];

export default function BalloonArtTrends() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      setLoading(true);
      try {
        // Simulate fetching trends
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockTrends);
          }, 1000);
        });
        setTrends(response);
      } catch (error) {
        setError("Failed to fetch trends.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrends();
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
          {trends.map((trend) => (
            <Box key={trend.id} p='10px' border='1px solid' borderColor='gray.300' mt='10px'>
              <Text fontWeight='bold'>{trend.title}</Text>
              <Text>{trend.description}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
