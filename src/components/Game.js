//components
import { Illustration } from "./Illustration";
import Word from "./Word";
import { WrongLetters } from "./WrongLetters";

export const Game = ({ selectedWord, correctLetters, wrongLetters }) => {
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
