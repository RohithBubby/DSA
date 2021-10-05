let snakesArr = [
  [62, 5],
  [33, 6],
  [49, 9],
  [88, 16],
  [41, 20],
  [56, 53],
  [98, 64],
  [93, 73],
  [95, 75],
];
let laddersArr = [
  [2, 37],
  [27, 46],
  [10, 32],
  [51, 68],
  [61, 79],
  [65, 84],
  [71, 91],
  [81, 100],
];
let players = ["Gaurav", "Sagar"];
let positions = new Array(players.length).fill(0);

// let dice = [
//   6, 1, 6, 4, 4, 6, 5, 4, 1, 6, 6, 2, 6, 6, 5, 2, 2, 5, 3, 5, 6, 3, 2, 3, 3, 5,
//   3, 4, 2, 5, 2, 5, 2, 6, 3, 3, 5, 2, 5, 6, 5, 1, 4, 2, 5, 4, 1, 6, 3, 4, 1, 1,
//   1, 5, 6, 3,
// ];
// let dicelength = dice.length;

let turn = 0;
let playerWon = false;

let hashmap = {};
snakesArr.forEach((snake) => (hashmap[snake[0]] = snake[1]));
laddersArr.forEach((snake) => (hashmap[snake[0]] = snake[1]));

// for (let i = 0; i < dicelength; i++) {
while (!playerWon) {
  let roll = getDiceValue();
  let currentposition = positions[turn];

  if (hashmap.hasOwnProperty(currentposition + roll)) {
    updatePosition(currentposition, hashmap[currentposition + roll], roll);
  } else {
    updatePosition(currentposition, currentposition + roll, roll);
  }

  changePlayer();
}

function changePlayer() {
  if (turn + 1 == players.length) {
    turn = 0;
  } else {
    turn++;
  }
}

function getDiceValue() {
  //   return dice.shift();

  //using single dice
  return Math.floor(Math.random() * 6) + 1;

  //using 2 dice so that value will be in ramge of 2-12
  //   return Math.floor(Math.random() * (12 - 2 + 1)) + 2;
}

function updatePosition(oldposition, newposition, roll) {
  if (newposition > 100) {
    positions[turn] = oldposition;
    console.log(
      `${players[turn]} rolled a ${roll} and moved from ${oldposition} to ${oldposition}`
    );
  } else {
    positions[turn] = newposition;
    if (newposition == 100) {
      playerWon = true;
      console.log(
        `${players[turn]} rolled a ${roll} and moved from ${oldposition} to ${newposition}`
      );
      console.log(`${players[turn]} wins the game`);
    } else {
      console.log(
        `${players[turn]} rolled a ${roll} and moved from ${oldposition} to ${newposition}`
      );
    }
  }
}
