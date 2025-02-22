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

const mockAnalytics = [
  { id: 1, title: "Analytics 1", value: "100" },
  { id: 2, title: "Analytics 2", value: "200" },
];

export default function AnalyticsInsights() {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      try {
        // Simulate fetching analytics data
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockAnalytics);
          }, 1000);
        });
        setAnalytics(response);
      } catch (error) {
        setError("Failed to fetch analytics data.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
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
          {analytics.map((analytic) => (
            <Box key={analytic.id} p='10px' border='1px solid' borderColor='gray.300' mt='10px'>
              <Text fontWeight='bold'>{analytic.title}</Text>
              <Text>{analytic.value}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
