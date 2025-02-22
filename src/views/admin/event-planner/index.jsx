import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function EventPlanner() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventTitle && eventDate) {
      // Simulate event creation
      setSuccess(true);
      setError(null);
      setEventTitle("");
      setEventDate("");
    } else {
      setError("Please fill in all fields.");
    }
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel color={textColor}>Event Title</FormLabel>
          <Input
            type='text'
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mt='20px'>
          <FormLabel color={textColor}>Event Date</FormLabel>
          <Input
            type='date'
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </FormControl>
        <Button mt='20px' type='submit'>Create Event</Button>
      </form>
      {success && <Text color='green.500'>Event created successfully!</Text>}
      {error && (
        <Alert status='error' mt='20px'>
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </Box>
  );
}
