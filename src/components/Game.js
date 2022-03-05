//components
import { Illustration } from "./Illustration";
import Word from "./Word";
import { WrongLetters } from "./WrongLetters";

export const Game = () => {
  return (
    <>
      <div className="game-container">
        <Illustration />
        <WrongLetters />
        <Word />
      </div>
    </>
  );
};
