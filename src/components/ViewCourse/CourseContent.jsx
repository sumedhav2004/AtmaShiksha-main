import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";
import CourseContentList from "./CourseContentList";

const accordionButtonStyle = {
  textAlign: "left",
  fontSize: "20px",
  color: "primaryTextColor",
  fontWeight: "medium",
  py: "15px",
};

function CourseContent(props) {
  return (
    <Flex
      w="100%"
      h="fit-content"
      justify="center"
      p="50px"
      direction="column"
      align="center"
    >
      <Heading
        px="20px"
        mb="0.7em"
        fontSize="5xl"
        fontWeight="medium"
        color="primaryTextColor"
        position="relative"
        left="-430px"
      >
        Course Content
      </Heading>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        w="70%"
        px="20px"
        py="10px"
        border="2px solid #ddd"
        borderRadius="5px"
      >
        <AccordionItem borderTopStyle="none" borderBottomWidth="1px">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" sx={accordionButtonStyle}>
                {props.title1}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList content={props.content1} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderBottomWidth="1px">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" sx={accordionButtonStyle}>
                {props.title2}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList content={props.content2} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderBottomWidth="1px">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" sx={accordionButtonStyle}>
                {props.title3}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList content={props.content3} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderBottomStyle="none">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" sx={accordionButtonStyle}>
                {props.title4}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList content={props.content4} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default CourseContent;
