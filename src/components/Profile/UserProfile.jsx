import { Button, Divider, Flex, Image } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import profile from "../../images/sparsh.jpeg";
import ProfileContent from "./ProfileContent";
import { userData } from "./userData";

function UserProfile() {
  return (
    <>
      <Navbar />
      <Flex w="100%" h={"calc(100vh - 70px)"} align="center" justify="center">
        <Flex
          h="90%"
          w="80%"
          borderRadius="20px"
          bg="transparent"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          transform="translateZ(10px)"
          p="30px"
          justify="space-between"
        >
          <Flex
            w="30%"
            h="450px"
            direction="column"
            align="center"
            justify="space-around"
          >
            <Image
              src={profile}
              w="80%"
              h="350px"
              objectFit="cover"
              borderRadius="100%"
            />
            <Button
              color="white"
              bg="ctaColor"
              _hover={{ bg: "ctaHover" }}
              fontSize="18px"
              fontWeight="medium"
              w="60%"
              h="50px"
              p="20px"
            >
              Update Profile
            </Button>
          </Flex>
          <Divider orientation="vertical" />
          <ProfileContent
            userName={userData.userName}
            name={userData.name}
            email={userData.email}
            batch={userData.batch}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default UserProfile;
