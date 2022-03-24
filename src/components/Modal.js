import { useEffect } from "react";

//helpers
import { checkForWin } from "../helpers/checkForWin";

const Modal = ({
  data,
  correctLetters,
  wrongLetters,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealQoute = "";
  let playable = true;

  if (checkForWin(data, correctLetters, wrongLetters) === "win") {
    finalMessage = "Congratulations you won!";
    playable = false;
  } else if (checkForWin(data, correctLetters, wrongLetters) === "lose") {
    finalMessage = "Sorry. You lose!";
    finalMessageRevealQoute = data;
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
        <h3 className="font-regular">
          <strong>The qoute was: </strong>
          {finalMessageRevealQoute}
        </h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Modal;
