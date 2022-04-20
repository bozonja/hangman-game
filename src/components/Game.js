import { useEffect, useRef } from "react";

//components
import { Illustration } from "./Illustration";
import Qoute from "./Qoute";
import { WrongLetters } from "./WrongLetters";
import Notification from "./Notification";
import Modal from "./Modal";
//helpers
import { showNotification as show } from "../helpers/showNotification";
import { checkForWin } from "../helpers/checkForWin";

export const Game = ({
  data,
  error,
  loading,
  correctLetters,
  playable,
  setPlayable,
  wrongLetters,
  setCorrectLetters,
  setWrongLetters,
  notification,
  setNotification,
  playAgain,
  duration,
  setDuration,
}) => {
  const timer = useRef();

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (data && data.content.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setDuration((duration) => duration + 1000);
    }, 1000);
  }, []);

  if (checkForWin(data.content, correctLetters, wrongLetters) === "win") {
    clearInterval(timer.current);
  }
  if (checkForWin(data.content, correctLetters, wrongLetters) === "lose") {
    clearInterval(timer.current);
  }

  return (
    <>
      <div className="game-container">
        {loading && <h1>Loading...</h1>}
        <Illustration wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      <>
        <Qoute data={data} correctLetters={correctLetters} />
        <p className="error">{error}</p>
      </>
      <Notification notification={notification} />
      <Modal
        data={data}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        setPlayable={setPlayable}
        playAgain={playAgain}
        duration={duration}
      />
    </>
  );
};
