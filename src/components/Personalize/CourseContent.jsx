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

function CourseContent() {
  return (
    <Flex
      w="100%"
      h="fit-content"
      justify="center"
      p="50px"
      direction="column"
      align="center"
    >
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
                What is Machine Learning?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderBottomWidth="1px">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" sx={accordionButtonStyle}>
                Simple Linear Regression
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderBottomWidth="1px">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" sx={accordionButtonStyle}>
                Multiple Linear Regression
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderBottomStyle="none">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" sx={accordionButtonStyle}>
                Polynomial Regression
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CourseContentList />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default CourseContent;
