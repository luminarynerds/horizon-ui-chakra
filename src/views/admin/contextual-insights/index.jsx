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

const mockInsights = [
  { id: 1, title: "Insight 1", description: "This is the first insight.", trend: "increasing", activity: "high" },
  { id: 2, title: "Insight 2", description: "This is the second insight.", trend: "decreasing", activity: "low" },
];

export default function ContextualInsights() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      try {
        // Simulate fetching insights
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockInsights);
          }, 1000);
        });
        setInsights(response);
      } catch (error) {
        setError("Failed to fetch insights.");
      } finally {
        setLoading(false);
      }
    };
    fetchInsights();
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
          {insights.map((insight) => (
            <Box key={insight.id} p='10px' border='1px solid' borderColor='gray.300' mt='10px'>
              <Text fontWeight='bold'>{insight.title}</Text>
              <Text>{insight.description}</Text>
              <Text>Trend: {insight.trend}</Text>
              <Text>Activity: {insight.activity}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
