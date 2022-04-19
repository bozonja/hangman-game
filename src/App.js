import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css
import "./App.css";
//comps
import Header from "./components/Header";
import { Game } from "./components/Game";
import { Homepage } from "./components/Homepage";
import { NotFound } from "./components/NotFound";
//helpers
import { useFetch } from "./helpers/useFetch";
import { checkForWin } from "./helpers/checkForWin";

function App() {
  const [value, setValue] = useState("");
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [notification, setNotification] = useState(false);
  const [duration, setDuration] = useState(0);

  const { data, error, loading, refetch } = useFetch();

  const timer = useRef();

  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    refetch();
    setDuration(0);
    timer.current = setInterval(() => {
      setDuration((duration) => duration + 1000);
    }, 1000);
  };

  if (checkForWin(data.content, correctLetters, wrongLetters) === "win") {
    clearInterval(timer.current);
  }
  if (checkForWin(data.content, correctLetters, wrongLetters) === "lose") {
    clearInterval(timer.current);
  }

  return (
    <>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <main>
          <Routes>
            <Route
              path="/"
              exact
              element={<Homepage value={value} setValue={setValue} />}
            />
            <Route
              path="/game"
              element={
                <Game
                  value={value}
                  setValue={setValue}
                  data={data}
                  error={error}
                  loading={loading}
                  correctLetters={correctLetters}
                  wrongLetters={wrongLetters}
                  playable={playable}
                  setPlayable={setPlayable}
                  setCorrectLetters={setCorrectLetters}
                  setWrongLetters={setWrongLetters}
                  notification={notification}
                  setNotification={setNotification}
                  playAgain={playAgain}
                  duration={duration}
                  setDuration={setDuration}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
