import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//css
import "./App.css";
import Header from "./components/Header";
import { Game } from "./components/Game";
import { Homepage } from "./components/Homepage";
import { NotFound } from "./components/NotFound";

//TODO: fetch random qoute from API
const words = [
  'Application is "so awesome", my good',
  "programming",
  "interface",
  "Wizard",
];
const selectedWord =
  words[Math.floor(Math.random() * words.length)].toLowerCase();

function App() {
  const [value, setValue] = useState("");
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [notification, setNotification] = useState(false);

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
                  selectedWord={selectedWord}
                  correctLetters={correctLetters}
                  wrongLetters={wrongLetters}
                  playable={playable}
                  setPlayable={setPlayable}
                  setCorrectLetters={setCorrectLetters}
                  setWrongLetters={setWrongLetters}
                  notification={notification}
                  setNotification={setNotification}
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
