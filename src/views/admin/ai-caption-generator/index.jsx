import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function AICaptionGenerator() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      // Simulate caption generation
      setTimeout(() => {
        setCaption("This is a generated caption for the uploaded image.");
        setSuccess(true);
        setError(null);
      }, 1000);
    } else {
      setError("Please upload an image.");
    }
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <form onSubmit={handleSubmit}>
        <Input type='file' onChange={handleImageChange} accept='image/*' required />
        <Button type='submit' mt='10px'>Generate Caption</Button>
      </form>
      {success && <Text color='green.500'>{caption}</Text>}
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
