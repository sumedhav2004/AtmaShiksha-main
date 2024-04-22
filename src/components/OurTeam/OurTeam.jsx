import { Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import TeamCard from "./TeamCard";
import { teamInfo } from "./teamData";
import Footer from "../Footer";

function OurTeam() {
  return (
    <>
      <Navbar />
      <Flex
        w="100%"
        minH={"calc(100vh - 70px)"}
        direction="column"
        align="center"
        p="50px"
      >
        <Flex
          direction="column"
          w="50%"
          h="25vh"
          justify="space-evenly"
          pb="20px"
        >
          <Heading
            fontWeight="medium"
            color="primaryTextColor"
            fontSize="48px"
            py="10px"
          >
            Meet Our Team
          </Heading>
          <Text
            fontSize="18px"
            fontWeight="thin"
            color="secondaryTextColor"
            textAlign="justify"
            w="80%"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            lorem ac ligula euismod, at posuere ipsum vulputate. Fusce
            ullamcorper vehicula nisl, at posuere ipsum vulputate. Fusce
            ullamcorper vehicula nisl
          </Text>
        </Flex>
        <Flex
          wrap="wrap"
          w="80%"
          gap="40px"
          align="center"
          justify="center"
          p="30px"
        >
          {teamInfo.map((member) => {
            return (
              <TeamCard
                name={member.name}
                post={member.post}
                image={member.imageUrl}
                linkedin={member.socials.linkedin}
                instagram={member.socials.instagram}
                github={member.socials.github}
              />
            );
          })}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default OurTeam;
