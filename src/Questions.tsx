import React, {useRef, useState, FC, ReactElement} from "react";
import { Transition } from "react-transition-group";
import { sleep } from "./sleep";
import './index.scss';

interface IProps {
  questions: any[];
  onFinish: () => void;
  children: (nextCard: any, currentIndex: number) => ReactElement;
  animation?: "blur-fade" | "grow-fade";
  renderNavigation?: (
    next: () => void,
    prev: () => void,
    index: number,
  ) => ReactElement;
}

const Questions: FC<IProps> = (props) => {
  const { questions, onFinish, children, animation, renderNavigation } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIn, setIsIn] = useState(true);
  const [direction, setDirection] = useState("next");

  const currentQuestion =
    currentIndex < questions.length ? questions[currentIndex] : null;

  const inProgress = useRef(false);
  
  const moveCard = async (moveDirection: "next" | "prev") => {
    if (inProgress.current) return;
    // block the animation if animation is in progress
    inProgress.current = true;
    setDirection(moveDirection)
    // delay of the submit
    await sleep(250);
    setIsIn(false);
    // delay of the animation
    await sleep(500);
    setIsIn(true);
    if (moveDirection === "next") {
      setNextQuestion();
    } else {
      setPrevQuestion();
    }
    inProgress.current = false;
  }

  const setPrevQuestion = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
  }

  const setNextQuestion = () => {
    if (currentIndex + 1 >= questions.length) {
      onFinishQuestionnaire();
      return
    }
    // finally update the index
    setCurrentIndex(currentIndex + 1);
  };

  const onFinishQuestionnaire = () => {
    if (onFinish) {
      onFinish();
    }
  };

  const next = () => {
    moveCard("next")
  }

  const prev = () => {
    moveCard("prev")
  }

  return (
    <div className="container">
      {currentQuestion && (
        <Transition in={isIn} timeout={500}>
          {(status: any) => (
            <div className={`animateur ${direction} ${status} ${animation || "blur-fade"}`}>
              {children(next, currentIndex)}
            </div>
          )}
        </Transition>
      )}
      {renderNavigation && (
        <div className="navigation">{renderNavigation(next, prev, currentIndex)}</div>
      )}
    </div>
  );
};

export default Questions;