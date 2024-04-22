import {
  Text,
  Box,
  Heading,
  Flex,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const headingStyles = {
  fontSize: "28px",
  fontWeight: "600",
  "text-transform": "uppercase",
  pb: "15px",
};

function Footer() {
  return (
    <Flex
      w="100%"
      h="30vh"
      bg="footerColor"
      justify="center"
      color="footerTextColor"
    >
      <Flex w="80%" h="100%" align="center" justify="space-around" gap="20px">
        <Box w="45%" h="50%">
          <Heading sx={headingStyles}>About</Heading>
          <Text textAlign="justify" fontSize="14px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptate, iste obcaecati, doloremque aspernatur animi nesciunt
            corporis officiis voluptatum, placeat reiciendis at eligendi.
            Voluptates odit deleniti nobis unde sint recusandae voluptatum,
            adipisci, qui, ipsam reprehenderit excepturi beatae facere vero!
            Architecto!
          </Text>
        </Box>
        <Flex w="20%" h="50%" align="center" direction="column">
          <Heading sx={headingStyles} textAlign="center">
            Links
          </Heading>
          <HStack w="80%" justify="space-evenly">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} fontSize="28px" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} fontSize="28px" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} fontSize="28px" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} fontSize="28px" />
            </a>
          </HStack>
        </Flex>
        <Box h="50%" w="20%">
          <Heading sx={headingStyles}>Contact Us</Heading>
          <VStack>
            <Flex w="100%" align="center">
              <FontAwesomeIcon icon={faEnvelope} />
              <Text ms="10px">runtimeterror@mail.com</Text>
            </Flex>
            <Flex w="100%" align="center">
              <FontAwesomeIcon icon={faPhone} />
              <Text ms="10px">+91-8209377356</Text>
            </Flex>
          </VStack>
        </Box>
      </Flex>
      <Text
        position="absolute"
        bottom="10px"
        textAlign="center"
        w="100%"
        fontSize="16px"
        fontWeight="400"
      >
        © {new Date().getFullYear()} Copyright: Runtime Terror
      </Text>
    </Flex>
  );
}

export default Footer;
