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
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const mockEventDetails = {
  id: 1,
  title: "Event 1",
  date: "2025-03-01",
  description: "This is a detailed description of Event 1.",
};

export default function EventDetails() {
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [eventId, setEventId] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      setLoading(true);
      try {
        // Simulate fetching data
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockEventDetails);
          }, 1000);
        });
        setEventDetails(response);
      } catch (error) {
        setError("Failed to fetch event details.");
      } finally {
        setLoading(false);
      }
    };
    fetchEventDetails();
  }, []);

  const textColor = useColorModeValue("secondaryGray.900", "white");

  const handleEventIdChange = (e) => {
    setEventId(e.target.value);
  };

  const handleFetchEventDetails = async () => {
    setLoading(true);
    try {
      // Simulate fetching data
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockEventDetails);
        }, 1000);
      });
      setSelectedEvent(response);
    } catch (error) {
      setError("Failed to fetch event details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p='20px' bg={useColorModeValue("white", "navy.700")} rounded='20px'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <>
          <FormControl>
            <FormLabel>Event ID:</FormLabel>
            <Input type='text' value={eventId} onChange={handleEventIdChange} />
            <Button onClick={handleFetchEventDetails}>Fetch Event Details</Button>
          </FormControl>
          {selectedEvent ? (
            <>
              <Text color={textColor} fontSize='lg' fontWeight='bold'>
                {selectedEvent.title}
              </Text>
              <Text color={textColor}>{selectedEvent.date}</Text>
              <Text color={textColor}>{selectedEvent.description}</Text>
            </>
          ) : (
            <Text color={textColor}>Please enter an event ID and click "Fetch Event Details" to view event details.</Text>
          )}
        </>
      )}
    </Box>
  );
}
