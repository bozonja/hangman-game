export const checkForWin = (qoute, correct, wrong) => {
  let status = "win";

  const re = /\W/g;

  qoute
    .replace(re, "")
    .split("")
    .forEach((letter) => {
      if (!correct.includes(letter)) {
        status = "";
        // } else if (re.test(letter)) {
        //   return letter;
      }
    });

  if (wrong.length === 6) status = "lose";

  return status;
};
