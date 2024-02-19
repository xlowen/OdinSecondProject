console.log("test");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let playerWin = 0;
let computerWin = 0;

function play5rounds(){
    for (let i = 1; i <= 5; i++){

    function getComputerChoice(){

        randomNum = Math.floor(Math.random()* 100 + 1);
        if (randomNum >= 1 && randomNum < 34){
            return 1;
        }
        else if (randomNum >= 34 && randomNum < 67){
            return 2;
        }
        else {
            return 3;
        }
    }

    let computerChoice = getComputerChoice();

    function playerSelection() {
        let playerHand = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();

        if (playerHand === "rock"){
            return 1;        
        }
        else if (playerHand === "paper"){
            return 2;
        }
        else if (playerHand === "scissors"){
            return 3;
        }
        else {
            alert("Please choose between rock paper or scissors");
            playerSelection();
        }

    } 

    let playerHand = playerSelection();

    function playRound(player, computer) {

        if (player === computer){
            console.log("It's a tie!")
        }
        else if (player === 1 && computer === 3){
            console.log("You win: rock beats scissors");
            playerWin += 1;
        }
        else if (player === 1 && computer === 2){
            console.log("you lose: paper beats rock");
            computerWin += 1;
        }
        else if (player === 2 && computer === 1){
            console.log("you win: paper beats scissors");
            playerWin += 1;
        }
        else if (player === 2 && computer === 3){
            console.log("you lose: scissors beats paper");
            computerWin += 1;
        }
        else if (player === 3 && computer === 1){
            console.log("You lose: rock beats scissors");
            computerWin += 1;
        }
        else {
            console.log("you win: scissors beats paper")
            playerWin += 1;
        }
    }
    playRound(playerHand, computerChoice);
    console.log(`Round: ${i}`)
    console.log(`Player Score: ${playerWin} - Computer Score: ${computerWin}`)
    }
    if (playerWin > computerWin){
        console.log(`Final score: You: ${playerWin}. Computer: ${computerWin}. Congratulations to you player!`);
    }
    else {
        console.log(`Final score: You: ${playerWin}. Computer: ${computerWin}. The computer was better.... :`);
    }
}

// play5rounds();
// console.log(`rock = 1, paper = 2, scissors = 3. Player chose: ${playerHand} Computer chose: ${computerChoice}`);

// console.log(getComputerChoice());