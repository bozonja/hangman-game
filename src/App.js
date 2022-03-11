import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//css
import "./App.css";
import Header from "./components/Header";
import { Game } from "./components/Game";
import { Homepage } from "./components/Homepage";
import { NotFound } from "./components/NotFound";

//TODO: fetch random qoute from API
const words = ["application", "programming", "interface", "wizard"];
const selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [value, setValue] = useState("");
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

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
                  setCorrectLetters={setCorrectLetters}
                  setWrongLetters={setWrongLetters}
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
