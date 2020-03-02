import React, {useRef, useState, FC, ReactElement} from "react";
import { Transition } from "react-transition-group";
import { sleep } from "./sleep";
import './index.scss';

interface IProps {
  questions: any[];
  onFinish: () => void;
  children: (nextCard: any, currentIndex: number) => ReactElement;
  animation?: "blur-fade" | "grow-fade";
}

const Questions: FC<IProps> = ({ questions, onFinish, children, animation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIn, setIsIn] = useState(true);

  const currentQuestion =
    currentIndex < questions.length ? questions[currentIndex] : null;

  const inProgress = useRef(false);
  
  const nextCard = async () => {
    if (inProgress.current) return;
    // block the animation if animation is in progress
    inProgress.current = true;
    // delay of the submit
    await sleep(250);
    setIsIn(false);
    // delay of the animation
    await sleep(500);
    setIsIn(true);
    setNextQuestion(currentIndex);
    inProgress.current = false;
  };

  const setNextQuestion = (index: number) => {
    const nextQuestionIndex = index + 1;
    // are we done? finish it
    if (nextQuestionIndex >= questions.length) {
      onFinishQuestionnaire();
      return
    }
    // finally update the index
    setCurrentIndex(nextQuestionIndex);
  };

  const onFinishQuestionnaire = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <div>
      {currentQuestion && (
        <Transition in={isIn} timeout={500}>
          {(status: any) => (
            <div className={`animateur ${status} ${animation || "blur-fade"}`}>
              <div className="content">
                {children(nextCard, currentIndex)}
              </div>
            </div>
          )}
        </Transition>
      )}
    </div>
  );
};

export default Questions;