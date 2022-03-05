import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ value }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [value]);

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
