import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CourseHeader(props) {
  return (
    <Flex w="100%" h="50vh" bg="blue.50" align="center" justify="space-evenly">
      <Flex h="75%" w="50%" p="40px" direction="column" justify="space-between">
        <Heading color="primaryTextColor" fontSize="40px" fontWeight="800">
          {props.title}
        </Heading>
        <Box ml="-5px">
          <Text
            fontSize="18px"
            m="5px"
            textAlign="justify"
            fontWeight="light"
            color="secondaryTextColor"
          >
            {props.desc}
          </Text>
          <Text
            fontSize="18px"
            m="5px"
            textAlign="justify"
            fontWeight="light"
            color="secondaryTextColor"
          >
            {props.keyConcepts}
          </Text>
        </Box>
        <Button
          bg="ctaColor"
          _hover={{ bg: "ctaHover" }}
          color="white"
          p="25px"
          fontSize="16px"
          w="200px"
        >
          <Link
            to={{ pathname: "/prequiz", state: props.title }}
            style={{ textDecoration: "none" }}
          >
            Personalize
          </Link>
        </Button>
      </Flex>
      <Image w="25%" h="70%" borderRadius="10px" src={props.image} />
    </Flex>
  );
}

export default CourseHeader;
