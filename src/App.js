import "./App.css";

//components
import Header from "./components/Header";
import { Illustration } from "./components/Illustration";

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Illustration />
      </div>
    </>
  );
}

export default App;
