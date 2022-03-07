import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css
import "./App.css";
//components
import Header from "./components/Header";
import { Game } from "./components/Game";
import { Homepage } from "./components/Homepage";
import { NotFound } from "./components/NotFound";

function App() {
  const [value, setValue] = useState("");
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  //TODO: fetch random qoute from API
  const words = ["application", "programming", "interface", "wizard"];
  const selectedWord = words[Math.floor(Math.random() * words.length)];

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
