import { useContext } from "react";
import { useLocation } from "react-router-dom";

//helpers
import { ValueContext } from "../helpers/Context";

const Header = () => {
  const { pathname } = useLocation();
  const { value } = useContext(ValueContext);

  return (
    <header>
      <h1>
        {pathname.includes("game") && `Hi ${value}!`} Welcome to the Hangman
        game.
      </h1>
    </header>
  );
};

export default Header;
