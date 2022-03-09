export const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prevValue, currValue) =>
              prevValue === null ? [currValue] : [prevValue, ", ", currValue],
            null
          )}
      </div>
    </div>
  );
};
