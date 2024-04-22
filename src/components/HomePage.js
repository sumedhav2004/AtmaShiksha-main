import { Box, Container, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);

  const handleVisiblity = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      history.push("/landing");
    }
  }, [history]);

  return (
    <Container
      maxW="xl"
      centerContent
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        bg="white"
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        color="black"
        p="20px"
      >
        <Text
          fontWeight="normal"
          fontSize="lg"
          color="primaryTextColor"
          justifyContent="center"
          textAlign="center"
          bg="white"
          pt="35px"
          pb="5px"
        >
          <span style={{ color: "#2454ff" }}>Atma</span>Shiksha
        </Text>
        <Box>
          <SignUp visible={visible} handleVisiblity={handleVisiblity} />
        </Box>
        <Box>
          <Login visible={visible} handleVisiblity={handleVisiblity} />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
