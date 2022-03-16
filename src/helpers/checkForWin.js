export const checkForWin = (word, correct, wrong) => {
  let status = "win";

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  if (wrong.length === 6) status = "lose";

  return status;
};
