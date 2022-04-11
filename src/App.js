import { useState } from "react";
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

function App() {
  const [value, setValue] = useState("");
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [notification, setNotification] = useState(false);

  const { data, error, refetch } = useFetch();

  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    refetch();
  };

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
                  correctLetters={correctLetters}
                  wrongLetters={wrongLetters}
                  playable={playable}
                  setPlayable={setPlayable}
                  setCorrectLetters={setCorrectLetters}
                  setWrongLetters={setWrongLetters}
                  notification={notification}
                  setNotification={setNotification}
                  playAgain={playAgain}
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
