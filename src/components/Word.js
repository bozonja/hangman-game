const Word = ({ selectedWord, correctLetters }) => {
  const checkQuote = (letter) => {
    if (correctLetters.includes(letter)) {
      return letter;
    } else if (letter.includes(",") || letter.includes('"')) {
      return letter;
    } else return "";
  };

  return (
    <>
      <p>Guess a quote:</p>
      <div className="word">
        {selectedWord.split("").map((letter, i) => (
          <span
            style={{ borderBottom: letter.includes(" ") && "none" }}
            className="letter"
            key={i}
          >
            {checkQuote(letter)}
          </span>
        ))}
      </div>
    </>
  );
};

export default Word;
