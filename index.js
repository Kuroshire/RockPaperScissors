const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");


const playerRockText = document.querySelector("#playerRock");
const playerPaperText = document.querySelector("#playerPaper");
const playerScissorsText = document.querySelector("#playerScissors");

const playerWin = document.querySelector("#playerWin");
const playerLose = document.querySelector("#playerLose");
const playerDraw = document.querySelector("#playerDraw");

const computerRockText = document.querySelector("#computerRock");
const computerPaperText = document.querySelector("#computerPaper");
const computerScissorsText = document.querySelector("#computerScissors");


let player;
let computer;
let result;

let playerRock = 0;
let playerPaper = 0;
let playerScissors = 0;

let computerRock = 0;
let computerPaper = 0;
let computerScissors = 0;

let win = 0;
let lose = 0;
let draw = 0;


choiceBtns.forEach(button => 
    button.addEventListener("click", ()=> {
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = `${checkWinner()}`;

        updateStats();

        playerRockText.textContent = `ROCK: ${playerRock}`
        playerPaperText.textContent = `PAPER: ${playerPaper}`
        playerScissorsText.textContent = `SCISSORS: ${playerScissors}`

        playerWin.textContent = `WON: ${win}`;
        playerLose.textContent = `LOSE: ${lose}`;
        playerDraw.textContent = `DRAW: ${draw}`;

        computerRockText.textContent = `ROCK: ${computerRock}`
        computerPaperText.textContent = `PAPER: ${computerPaper}`
        computerScissorsText.textContent = `SCISSORS: ${computerScissors}`

    })
);

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            computerRock += 1;
            break;
        case 2:
            computer = "PAPER";
            computerPaper += 1;
            break;
        case 3:
            computer = "SCISSORS";
            computerScissors += 1;
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "DRAW!";
    }

    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
    }
}

function updateStats(){
    //can be replace by a switch obviously but that way i get both versions
    if(player == "ROCK"){
        playerRock += 1;
    } else if(player == "PAPER"){
        playerPaper += 1;
    } else if(player == "SCISSORS"){
        playerScissors += 1;
    }

    switch(resultText.textContent){
        case "YOU WIN!":
            win += 1;
            break;
        case "YOU LOSE!":
            lose += 1;
            break; 
        case "DRAW!":
            draw += 1;
            break;
    }
}