import { ListItem, List, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const listTextStyle = {
  fontSize: "16px",
  color: "secondaryTextColor",
  ml: "15px",
  mt: "-3px",
  fontWeight: "400",
  "text-align": "justify",
};

const listStyle = {
  width: "95%",
  display: "flex",
  justify: "center",
  align: "center",
  my: "10px",
};

const iconStyle = {
  color: "secondaryTextColor",
  fontSize: "18px",
};

function CourseContentList() {
  return (
    <List>
      <ListItem sx={listStyle}>
        <Text fontWeight="medium" mb="10px" mt="-10px">
          What you'll learn
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          urna eget odio vehicula vestibulum. Integer quis sapien eu justo
          iaculis faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla quis urna eget odio vehicula vestibulum. Integer quis
          sapien eu justo iaculis faucibus.
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          urna eget odio vehicula vestibulum. Integer quis sapien eu justo
          iaculis faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla quis urna eget odio vehicula vestibulum. Integer quis
          sapien eu justo iaculis faucibus.
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          urna eget odio vehicula vestibulum. Integer quis sapien eu justo
          iaculis faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla quis urna eget odio vehicula vestibulum. Integer quis
          sapien eu justo iaculis faucibus.
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          urna eget odio vehicula vestibulum. Integer quis sapien eu justo
          iaculis faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla quis urna eget odio vehicula vestibulum. Integer quis
          sapien eu justo iaculis faucibus.
        </Text>
      </ListItem>
    </List>
  );
}

export default CourseContentList;
