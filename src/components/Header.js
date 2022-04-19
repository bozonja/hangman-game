import { useLocation } from "react-router-dom";

const Header = ({ value }) => {
  const { pathname } = useLocation();

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
