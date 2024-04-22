import { Box, Flex, Heading } from "@chakra-ui/react";
import { courseVideos } from "./courseAbout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function Playlist({ handleClick, courseId }) {
  function onClick(id) {
    handleClick(id);
  }

  return (
    <Flex
      w="35vw"
      h="79vh"
      border="1px solid #ddd"
      borderRadius="15px"
      direction="column"
      align="center"
    >
      <Box
        w="100%"
        h="100px"
        bg="gray.200"
        borderTopLeftRadius="15px"
        borderTopRightRadius="15px"
        border="1px solid #ddd"
        borderBottom="none"
        mb="10px"
        fontSize="24px"
        fontWeight="semibold"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Course Name
      </Box>
      <Box w="100%" overflowY="scroll">
        {courseVideos[courseId - 1].videos.map((video) => {
          return (
            <Box
              key={video.id}
              display="flex"
              p="20px"
              onClick={() => onClick(video.id)}
              cursor="pointer"
              borderBottom="1px solid #eee"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <FontAwesomeIcon icon={faPlayCircle} fontSize="30px" />
              </Box>
              <Heading fontSize="20px" fontWeight="medium" px="10px">
                {video.title}
              </Heading>
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}

export default Playlist;
