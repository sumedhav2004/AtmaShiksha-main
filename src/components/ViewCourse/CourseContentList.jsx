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

function CourseContentList(props) {
  return (
    <List>
      <ListItem sx={listStyle}>
        <Text fontWeight="medium" mb="10px" mt="-10px">
          What you'll learn
        </Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>{props.content.one}</Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>{props.content.two}</Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>{props.content.three}</Text>
      </ListItem>
      <ListItem sx={listStyle}>
        <FontAwesomeIcon icon={faCheckCircle} sx={iconStyle} />
        <Text sx={listTextStyle}>{props.content.four}</Text>
      </ListItem>
    </List>
  );
}

export default CourseContentList;
