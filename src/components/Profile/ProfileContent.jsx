import { Flex, Heading, Text } from "@chakra-ui/react";

function ProfileContent(props) {
  return (
    <Flex
      w="65%"
      h="100%"
      borderRadius="10px"
      border="1px solid #eee"
      p="30px"
      direction="column"
    >
      <Flex
        w="60%"
        h="fit-content"
        p="10px"
        align="center"
        justify="space-between"
        mb="20px"
      >
        <Heading fontSize="24px" fontWeight="medium" mx="10px">
          UserName:{" "}
        </Heading>
        <Text fontSize="22px" fontWeight="light" mx="10px">
          {props.userName}
        </Text>
      </Flex>
      <Flex
        w="60%"
        h="fit-content"
        p="10px"
        align="center"
        justify="space-between"
        mb="20px"
      >
        <Heading fontSize="24px" fontWeight="medium" mx="10px">
          Name:{" "}
        </Heading>
        <Text fontSize="22px" fontWeight="light" mx="10px">
          {props.name}
        </Text>
      </Flex>
      <Flex
        w="60%"
        h="fit-content"
        p="10px"
        align="center"
        justify="space-between"
        mb="20px"
      >
        <Heading fontSize="24px" fontWeight="medium" mx="10px">
          Email:{" "}
        </Heading>
        <Text fontSize="22px" fontWeight="light" mx="10px">
          {props.email}
        </Text>
      </Flex>
      <Flex
        w="60%"
        h="fit-content"
        p="10px"
        align="center"
        justify="space-between"
        mb="20px"
      >
        <Heading fontSize="24px" fontWeight="medium" mx="10px">
          Batch:{" "}
        </Heading>
        <Text fontSize="22px" fontWeight="light" mx="10px">
          {props.batch}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProfileContent;
