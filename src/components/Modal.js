import { useEffect, useState } from "react";
import axios from "axios";

//helpers
import { checkForWin } from "../helpers/checkForWin";

const Modal = ({
  data,
  correctLetters,
  wrongLetters,
  setPlayable,
  playAgain,
  value,
}) => {
  const [gameWinData, setGameWinData] = useState([]);
  const [gameWinError, setGameWinError] = useState("");
  const [highScoreData, setHighScoreData] = useState([]);
  const [highScoreError, setHighScoreError] = useState("");
  const [highScore, setHighscore] = useState(false);

  let finalMessage = "";
  let finalMessageRevealQoute = "";
  let playable = true;
  const errors = wrongLetters.length;

  if (checkForWin(data.content, correctLetters, wrongLetters) === "win") {
    finalMessage = "Congratulations you won!";
    playable = false;
    axios
      .post(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/",
        {
          quoteId: "",
          length: "",
          uniqueCharacters: "",
          userName: value,
          errors: errors,
          duration: "",
        }
      )
      .then((response) => setGameWinData(console.log(response.data)))
      .catch((error) => setGameWinError(error.message));
  } else if (
    checkForWin(data.content, correctLetters, wrongLetters) === "lose"
  ) {
    finalMessage = "Sorry. You lose!";
    finalMessageRevealQoute = data.content;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  const fetchHighScore = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/"
      )
      .then((response) => {
        setHighScoreData(response.data);
      })
      .catch((error) => {
        setHighScoreError(error.message);
      });
    setHighscore(!highScore);
  };

  console.log(data.content);

  return (
    <>
      <div
        className="modal-container"
        style={finalMessage !== "" ? { display: "flex" } : {}}
      >
        <div className="modal">
          <h2>{finalMessage}</h2>
          <h3 className="font-regular">
            <strong>
              {checkForWin(data.content, correctLetters, wrongLetters) ===
                "lose" && "The qoute was: "}
            </strong>
            {finalMessageRevealQoute}
          </h3>
          <h3 className="font-regular">
            <strong>Your score: {100 / 1 + errors}</strong>
            <div>
              <button className="button modal-btn" onClick={playAgain}>
                Play Again
              </button>
            </div>
            <p className="error">{gameWinError}</p>
            <button type="button" className="btn-link" onClick={fetchHighScore}>
              Show highscore
            </button>
            <div>
              {highScore &&
                highScoreData &&
                highScoreData
                  .sort((a, b) => b.errors - a.errors)
                  .map((item) => (
                    <div className="user-data" key={item.id}>
                      <p className="user-data-text">
                        <strong>Username:</strong> {item.userName}
                      </p>
                      <p className="user-data-text">
                        <strong>Score:</strong> {100 / 1 + item.errors}
                      </p>
                    </div>
                  ))}
              <p className="error">{highScoreError}</p>
            </div>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Modal;
