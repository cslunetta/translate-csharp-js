console.log("Let's roll some dice, baby!");
console.log("---------------------------");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const d6 = () => {
  const dieValue = getRandomInt(1, 6);
  const die = { value: dieValue, dieString: "" };
  switch (die.value) {
    case 1:
      die.dieString = "\u2680";
      break;
    case 2:
      die.dieString = "\u2681";
      break;
    case 3:
      die.dieString = "\u2682";
      break;
    case 4:
      die.dieString = "\u2683";
      break;
    case 5:
      die.dieString = "\u2684";
      break;
    case 6:
      die.dieString = "\u2685";
      break;
  }
  return die;
};

for (i = 0; i < 10; i++) {
  const die1 = d6();
  const die2 = d6();

  let message = `${die1.dieString} + ${die2.dieString} = ${
    die1.value + die2.value
  }`;
  if (die1.value === die2.value) {
    message += " DOUBLES!";
  }
  console.log(message);
}
