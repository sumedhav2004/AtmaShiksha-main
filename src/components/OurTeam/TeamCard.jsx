import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
  Divider,
  Link,
} from "@chakra-ui/react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamCard(props) {
  return (
    <Card
      w="xs"
      minH="sm"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      bgGradient="linear-gradient(0deg, blue.50, transparent)"
      boxShadow="none"
    >
      <CardBody
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Image
          src={props.image}
          alt="logo"
          w="12em"
          h="12em"
          borderRadius="50%"
          objectFit="cover"
        />
        <Flex m="6" direction="column" align="center" justify="center">
          <Heading size="md" fontSize="24px" fontWeight="semibold">
            {props.name}
          </Heading>
          <Text fontWeight="normal" textTransform="uppercase">
            {props.post}
          </Text>
        </Flex>
        <Divider mb="20px" />
        <Flex w="60%" h="30px" align="center" justify="space-between">
          <Link href={props.linkedin} target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              fontSize="30px"
              color="#718096"
              cursor="pointer"
            />
          </Link>
          <Link href={props.github} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              fontSize="30px"
              color="#718096"
              cursor="pointer"
            />
          </Link>
          <Link href={props.instagram} target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              fontSize="30px"
              color="#718096"
              cursor="pointer"
            />
          </Link>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default TeamCard;
