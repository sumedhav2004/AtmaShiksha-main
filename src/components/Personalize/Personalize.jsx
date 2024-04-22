import Navbar from "../Navbar/Navbar";
import Video from "./Video";
import Footer from "../Footer";
import { Flex } from "@chakra-ui/react";
import Playlist from "./Playlist";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Personalize({ videoUrl, setVideoUrl }) {
  const location = useLocation();
  const { id } = location.state || {};
  console.log("COURSE ID:", id);
  const [video, setVideo] = useState(1);
  const [link, setLink] = useState("");
  console.log("Personalize:", videoUrl);
  // let valuearray = Object.values(videoUrl[0]);
  // console.log(valuearray);
  // videoUrl.map((video) => {
  //   for (var propName in video) {
  //     if (video.hasOwnProperty(propName)) {
  //       var propValue = video[propName];
  //       console.log(propValue);
  //       setLink(propValue);
  //       // do something with each element here
  //     }
  //   }
  // });

  function handleClick(courseId) {
    setVideo(courseId);
  }

  return (
    <div>
      <Navbar />
      <Flex w="100%" p="30px">
        <Video video={video} courseId={id} />
        <Playlist handleClick={handleClick} courseId={id} />
      </Flex>
      <Footer />
    </div>
  );
}

export default Personalize;
