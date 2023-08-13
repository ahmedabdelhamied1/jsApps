const gridEl = document.querySelector(".grid");
const scoreEL = document.getElementById("score");
const gridWidth = 28;
const gridHight = 28;
let score = 0;
const squares = [];
const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
function createGrid() {
  for (let i = 0; i < gridWidth * gridHight; i++) {
    const squareEl = document.createElement("div");
    gridEl.appendChild(squareEl);
    squares.push(squareEl);
  }
}

createGrid();

squares.map((square, index) => square.classList.add(layout[index]));

function styleGrid() {
  for (let square of squares) {
    if (square.classList.contains("0")) {
      square.classList.add("pac-dots");
    } else if (square.classList.contains("1")) {
      square.classList.add("wall");
    } else if (square.classList.contains("2")) {
      // square.classList.add("ghost-lair");
    } else if (square.classList.contains("3")) {
      square.classList.add("power-pellet");
    } else if (square.classList.contains("4")) {
      square.classList.add("empty");
    }
  }
}
styleGrid();

let currentFrogIndex = 490;
squares[currentFrogIndex].classList.add("pacman");

document.addEventListener("keydown", control);

function control(event) {
  squares[currentFrogIndex].classList.remove("pacman");

  switch (event.key) {
    case "ArrowLeft":
      if (
        currentFrogIndex % gridWidth !== 0 &&
        !squares[currentFrogIndex - 1].classList.contains("wall") &&
        !squares[currentFrogIndex - 1].classList.contains("ghost-lair")
      ) {
        currentFrogIndex--;
      }
      if (currentFrogIndex === 364) currentFrogIndex = 391;
      break;
    case "ArrowRight":
      if (
        currentFrogIndex % gridWidth < gridWidth - 1 &&
        !squares[currentFrogIndex + 1].classList.contains("wall") &&
        !squares[currentFrogIndex + 1].classList.contains("ghost-lair")
      ) {
        currentFrogIndex++;
      }
      if (currentFrogIndex === 391) currentFrogIndex = 364;

      break;
    case "ArrowUp":
      if (
        currentFrogIndex - gridHight >= 0 &&
        !squares[currentFrogIndex - gridHight].classList.contains("wall") &&
        !squares[currentFrogIndex - gridHight].classList.contains("ghost-lair")
      ) {
        currentFrogIndex -= gridHight;
      }
      break;
    case "ArrowDown":
      if (
        currentFrogIndex + gridHight < gridHight * gridHight &&
        !squares[currentFrogIndex + gridHight].classList.contains("wall") &&
        !squares[currentFrogIndex + gridHight].classList.contains("ghost-lair")
      ) {
        currentFrogIndex += gridHight;
      }
      break;
    default:
      break;
  }
  squares[currentFrogIndex].classList.add("pacman");
  pacDotEaten();
  checkForWin() 
  checkForGameOver();
}
function pacDotEaten() {
  if (squares[currentFrogIndex].classList.contains("pac-dots")) {
    squares[currentFrogIndex].classList.remove("pac-dots");
    score++;
  } else if (squares[currentFrogIndex].classList.contains("power-pellet")) {
    squares[currentFrogIndex].classList.remove("power-pellet");
    score += 10;
    ghosts.forEach((ghost) => {
      ghost.isScared = true;
    });
    setTimeout(() => {
      unScaredGhost();
    }, 5000);
  }
  scoreEL.innerText = score;
}
function unScaredGhost() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

class Ghost {
  constructor(ghostName, ghostStartIndex, ghostSpeed) {
    this.ghostName = ghostName;
    this.ghostStartIndex = ghostStartIndex;
    this.ghostSpeed = ghostSpeed;
    this.timerId = NaN;
    this.isScared = false;
    this.currentIndex = ghostStartIndex;
  }
}

const ghosts = [
  new Ghost("oka", 348, 250),
  new Ghost("sh7ta", 376, 400),
  new Ghost("otiga", 351, 300),
  new Ghost("karika", 379, 500),
];

ghosts.forEach((ghost) =>
  squares[ghost.ghostStartIndex].classList.add(ghost.ghostName)
);
ghosts.forEach((ghost) =>
  squares[ghost.ghostStartIndex].classList.add("ghost")
);

ghosts.forEach((ghost) => moveGhost(ghost));
function moveGhost(ghost) {
  const directions = [1, -1, gridWidth, -gridHight];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  ghost.timerId = setInterval(() => {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost")
    ) {
      squares[ghost.currentIndex].classList.remove(ghost.ghostName);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");

      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.ghostName);
      squares[ghost.currentIndex].classList.add("ghost");
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
      ghost.ghostSpeed = ghost.ghostSpeed * 0.625;
    }
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pacman")
    ) {
      squares[ghost.currentIndex].classList.remove(
        ghost.ghostName,
        "scared-ghost",
        "ghost"
      );
      score += 50;
      ghost.currentIndex = ghost.ghostStartIndex;
      squares[ghost.currentIndex].classList.add(ghost.ghostName, "ghost");
    }
    checkForGameOver();

  }, ghost.ghostSpeed);

}
function checkGameOver() {
  if(squares[currentFrogIndex].classList.contains('ghost'))
  {
    document.removeEventListener("keydown", control);
  }

}
function checkForGameOver() {
  if (squares[currentFrogIndex].classList.contains('ghost') &&
    !squares[currentFrogIndex].classList.contains('scared-ghost')) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keydown', control)
    setTimeout(function(){ alert("Game Over"); }, 500)
  }
}
function checkForWin() {
  if (score === 274) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keydown', control)
    setTimeout(function(){ alert("You have WON!"); }, 500)
  }
}