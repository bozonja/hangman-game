import "./App.css";

//components
import Header from "./components/Header";
import { Illustration } from "./components/Illustration";
import { WrongLetters } from "./components/WrongLetters";
import Word from "./components/Word";
import Modal from "./components/Modal";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Illustration />
        <WrongLetters />
        <Word />
        {/* <Modal />
        <Notification /> */}
      </div>
    </>
  );
}

export default App;
