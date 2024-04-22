import {
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <Card maxW="420px" borderRadius="20px" p="5px" borderTop="1px solid #eee">
      <CardBody fontFamily="Inter, sans-serif">
        <Stack>
          <Image
            src={props.image}
            h="275px"
            w="100%"
            borderRadius="10px"
            objectFit="cover"
          />
          <Heading
            fontSize="22px"
            fontWeight="semibold"
            color="primaryTextColor"
          >
            {props.title}
          </Heading>
          <Text fontSize="18px" textAlign="justify" color="secondaryTextColor">
            {props.desc}
          </Text>
          <ButtonGroup minH="fit-content">
            <Button
              variant="ghost"
              color="ctaColor"
              _hover={{ bg: "blue.50" }}
              w="sm"
              h="50px"
            >
              <Link
                to={{ pathname: "/courses", state: props.id }}
                style={{ textDecoration: "none" }}
              >
                View Course
              </Link>
            </Button>
            <Button
              variant="solid"
              color="white"
              bg="ctaColor"
              w="sm"
              h="50px"
              _hover={{ bg: "ctaHover" }}
            >
              <Link
                to={{ pathname: "/prequiz", state: props.title }}
                style={{ textDecoration: "none" }}
              >
                Personalize
              </Link>
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
