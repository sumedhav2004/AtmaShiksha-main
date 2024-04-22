import Navbar from "../Navbar/Navbar";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import Footer from "../Footer";
import { courseAbout } from "./courseAbout";
import { useLocation } from "react-router-dom";

function ViewCourse() {
  const location = useLocation();
  let id = location.state;

  return (
    <div>
      <Navbar />
      <CourseHeader
        title={courseAbout[id - 1].title}
        desc={courseAbout[id - 1].desc}
        keyConcepts={courseAbout[id - 1].keyConcepts}
        image={courseAbout[id - 1].imageUrl}
      />
      <CourseContent
        title1={courseAbout[id - 1].topics.title1.name}
        title2={courseAbout[id - 1].topics.title2.name}
        title3={courseAbout[id - 1].topics.title3.name}
        title4={courseAbout[id - 1].topics.title4.name}
        content1={courseAbout[id - 1].topics.title1.content}
        content2={courseAbout[id - 1].topics.title2.content}
        content3={courseAbout[id - 1].topics.title3.content}
        content4={courseAbout[id - 1].topics.title4.content}
      />
      <Footer />
    </div>
  );
}

export default ViewCourse;
