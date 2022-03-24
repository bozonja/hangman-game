export const checkForWin = (qoute, correct, wrong) => {
  let status = "win";

  qoute.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  if (wrong.length === 6) status = "lose";

  return status;
};
