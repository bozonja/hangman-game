export const checkForWin = (qoute, correct, wrong) => {
  let status = "win";
  const re = /\W/g;

  qoute &&
    qoute
      .toLowerCase()
      .replace(re, "")
      .split("")
      .forEach((letter) => {
        if (!correct.includes(letter)) {
          status = "";
        }
      });

  if (wrong.length === 6) status = "lose";

  return status;
};
