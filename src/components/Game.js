import { useState, useEffect } from "react";

//components
import { Illustration } from "./Illustration";
import Qoute from "./Qoute";
import { WrongLetters } from "./WrongLetters";
import Notification from "./Notification";
import Modal from "./Modal";
//helpers
import { showNotification as show } from "../helpers/showNotification";

export const Game = ({
  data,
  error,
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
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (data.includes(letter)) {
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
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(data);

  return (
    <>
      <div className="game-container">
        <Illustration wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      <>
        <Qoute data={data} correctLetters={correctLetters} />
        <p className="error">{error}</p>
      </>
      <Notification notification={notification} />
      <p className="time"> Seconds played {seconds}</p>
      <Modal
        data={data}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  );
};
