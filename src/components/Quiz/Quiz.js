import { useEffect, useState } from "react";
import Question from "../Question/Question";
import { Flex, Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Quiz = ({
  name,
  questions,
  score,
  setScore,
  setQuestions,
  answers,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  incorrect,
  setincorrect,
}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const location = useLocation();
  const { id } = location.state;

  // console.log(questions[currQues]);
  // console.log(questions);

  // useEffect(() => {
  //   setOptions(
  //     questions &&
  //       handleShuffle([
  //         questions[currQues]?.correct_answer,
  //         ...questions[currQues]?.incorrect_answers,
  //       ])
  //   );
  // }, [currQues, questions]);

  // const handleShuffle = (options) => {
  //   return options.sort(() => Math.random() - 0.5);
  // };

  return (
    <Flex direction="column" h="100vh" align="center" justify="center">
      {questions[currQues] ? (
        <>
          <Question
            id={id}
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            choiceA={choiceA}
            choiceB={choiceB}
            choiceC={choiceC}
            choiceD={choiceD}
            answers={answers}
            incorrect={incorrect}
            setincorrect={setincorrect}
          />
          <Flex w="100%" align="center" justify="center">
            <span>Score : {score}</span>
          </Flex>
        </>
      ) : (
        <Spinner w={20} h={20} size="xl" alignSelf="center" />
      )}
    </Flex>
  );
};

export default Quiz;
