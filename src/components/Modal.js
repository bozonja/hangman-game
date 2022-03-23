import { useEffect } from "react";

//helpers
import { checkForWin } from "../helpers/checkForWin";

const Modal = ({
  selectedWord,
  correctLetters,
  wrongLetters,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkForWin(selectedWord, correctLetters, wrongLetters) === "win") {
    finalMessage = "Congratulations you won!";
    playable = false;
  } else if (
    checkForWin(selectedWord, correctLetters, wrongLetters) === "lose"
  ) {
    finalMessage = "Sorry. You lose!";
    finalMessageRevealWord = `The word was ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="modal-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="modal">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Modal;
