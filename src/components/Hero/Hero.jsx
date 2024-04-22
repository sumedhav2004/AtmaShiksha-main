import { Heading, Flex, Image, Text, Button } from "@chakra-ui/react";
import bg from "../../images/bg.png";

function Hero() {
  return (
    <Flex
      w="100%"
      h={`calc(100vh - 70px)`}
      align="center"
      justify="space-around"
    >
      <Flex w="40vw" direction="column" justify="center">
        <Heading fontSize="60px" fontWeight="semibold" color="primaryTextColor">
          Unlock Your IT Potential <br />
          with AI-Powered Training
        </Heading>
        <Text fontSize="24px" fontWeight="normal" pb="30px">
          Learn, Practice, and Excel in IT with Our Cutting-Edge Courses
        </Text>
        <Button
          h="50px"
          w="50%"
          color="white"
          bg="ctaColor"
          _hover={{ bg: "ctaHover" }}
          fontSize="18px"
          fontWeight="semibold"
        >
          Explore Courses
        </Button>
      </Flex>
      <Image src={bg} w="800px" h="600px" />
    </Flex>
  );
}

export default Hero;
