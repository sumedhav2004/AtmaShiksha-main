import { HStack } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
import { courses } from "./Courses";

function CoursesSwiper() {
  return (
    <HStack w="100%" h="70vh" spacing={10} justify="center">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            desc={course.desc}
            image={course.image}
          />
        );
      })}
    </HStack>
  );
}

export default CoursesSwiper;
