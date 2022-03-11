import { useEffect } from "react";

//components
import { Illustration } from "./Illustration";
import Word from "./Word";
import { WrongLetters } from "./WrongLetters";

export const Game = ({
  selectedWord,
  correctLetters,
  playable,
  wrongLetters,
  setCorrectLetters,
  setWrongLetters,
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
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
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
        <Illustration />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
};
