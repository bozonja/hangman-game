//components
import { Illustration } from "./Illustration";
import Word from "./Word";
import { WrongLetters } from "./WrongLetters";

export const Game = ({ selectedWord, correctLetters }) => {
  return (
    <>
      <div className="game-container">
        <Illustration />
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
};
