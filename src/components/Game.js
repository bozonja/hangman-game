import { useEffect } from "react";

//components
import { Illustration } from "./Illustration";
import Word from "./Word";
import { WrongLetters } from "./WrongLetters";
import Notification from "./Notification";
import Modal from "./Modal";
//helpers
import { showNotification as show } from "../helpers/showNotification";

export const Game = ({
  selectedWord,
  correctLetters,
  playable,
  setPlayable,
  wrongLetters,
  setCorrectLetters,
  setWrongLetters,
  notification,
  setNotification,
  playAgain,
}) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
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
  return (
    <>
      <div className="game-container">
        <Illustration wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Notification notification={notification} />
      <Modal
        selectedWord={selectedWord}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  );
};
