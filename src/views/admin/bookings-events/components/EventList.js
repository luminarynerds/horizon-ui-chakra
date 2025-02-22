import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Button,
  Toast,
  useToast,
  Spinner,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const mockEvents = [
  { id: 1, title: "Event 1", date: "2025-03-01" },
  { id: 2, title: "Event 2", date: "2025-03-05" },
  { id: 3, title: "Event 3", date: "2025-03-10" },
];

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        // Simulate fetching data
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockEvents);
          }, 1000);
        });
        setEvents(response);
        toast({
          title: "Events Loaded",
          description: "Successfully fetched events.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        setError("Failed to fetch events.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box p='20px' bg={useColorModeValue("white", "navy.700")} rounded='20px'>
      <Text color={textColor} fontSize='lg' fontWeight='bold'>
        Upcoming Events
      </Text>
      {loading ? (
        <Flex justify='center' mt='20px'>
          <Spinner />
        </Flex>
      ) : error ? (
        <Alert status='error' mt='20px'>
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        events.map((event) => (
          <Box key={event.id} mt='10px'>
            <Text color={textColor}>{event.title} - {event.date}</Text>
          </Box>
        ))
      )}
    </Box>
  );
}
