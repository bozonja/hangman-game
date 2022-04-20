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
import { ValueContext } from "./helpers/Context";

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
        <ValueContext.Provider value={{ value, setValue }}>
          <Header />
          <main>
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route
                path="/game"
                element={
                  <Game
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
        </ValueContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
