import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ViewCourse from "./components/ViewCourse/ViewCourse";
import Personalize from "./components/Personalize/Personalize";
import { useState } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import OurTeam from "./components/OurTeam/OurTeam";
import UserProfile from "./components/Profile/UserProfile";
import { courses } from "./components/Courses/Courses";

function App() {
  const [questions, setQuestions] = useState([]);
  const [topics, settopics] = useState([]);
  const [answers, setanswers] = useState([]);
  const [choiceA, setchoiceA] = useState([]);
  const [choiceB, setchoiceB] = useState([]);
  const [choiceC, setchoiceC] = useState([]);
  const [choiceD, setchoiceD] = useState([]);
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [incorrect, setincorrect] = useState([]);
  const [videoUrl, setVideoUrl] = useState([]);

  const fetchQuestions = async (title) => {
    const string1 = title.charAt(0).toLowerCase() + title.slice(1);
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/quessionaire-api/${string1}`
      );
      // console.log(data);
      setQuestions(data.Questions);
      setanswers(data.Answer);
      setchoiceA(data["Choice A"]);
      setchoiceB(data["Choice B"]);
      setchoiceC(data["Choice C"]);
      setchoiceD(data["Choice D"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTopics = async (title) => {
    const string1 = title.charAt(0).toLowerCase() + title.slice(1);
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/topic-api/${string1}`
      );

      console.log(data.data);
      settopics(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // const fetchQuestions = async () => {
  //   const { data } = await axios.get(
  //     `https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple#`
  //   );

  //   // console.log(data);
  //   setQuestions(data.results);
  // };

  return (
    <div style={{ backgroundColor: "primaryColor" }} w="100%" className="hi">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/landing" component={LandingPage}></Route>
      <Route exact path="/courses" component={ViewCourse}></Route>
      <Route path="/prequiz" exact>
        <Home
          name={name}
          setName={setName}
          fetchQuestions={fetchQuestions}
          fetchTopics={fetchTopics}
          topics={topics}
          incorrect={incorrect}
          setincorrect={setincorrect}
        />
      </Route>
      <Route path="/quiz">
        <Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          answers={answers}
          choiceA={choiceA}
          choiceB={choiceB}
          choiceC={choiceC}
          choiceD={choiceD}
          setincorrect={setincorrect}
          incorrect={incorrect}
        />
      </Route>
      <Route path="/result">
        <Result
          name={name}
          score={score}
          setScore={setScore}
          incorrect={incorrect}
          setincorrect={setincorrect}
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
        />
      </Route>
      <Route exact path="/our-team" component={OurTeam}></Route>
      <Route exact path="/profile" component={UserProfile}></Route>
      <Route exact path="/personalize">
        <Personalize videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
      </Route>
    </div>
  );
}

export default App;
