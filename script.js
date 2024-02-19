console.log("Versão 1.0 - Com certeza revisões melhorarão o código.");

//definir variáveis usadas globalmente.
let playerWin = 0;
let computerWin = 0;
let playerWon;
let computerWon;


//função para o computador escolher aleatoriamente o que jogará
function getComputerChoice(){

    randomNum = Math.floor(Math.random()* 100 + 1);
    if (randomNum >= 1 && randomNum < 34){
        return 'PEDRA';
    }
    else if (randomNum >= 34 && randomNum < 67){
        return 'PAPEL';
    }
    else {
        return 'TESOURA';
    }
}

//função contendo a lógica comparativa entre jogador e computador
function playRound(playerSelection, computerChoice) {

    if (playerSelection === computerChoice){
        roundInfo.innerText = `${playerSelection} empata com ${computerChoice}.`;
    }
    else if (playerSelection === 'PEDRA' && computerChoice === 'TESOURA'){
        roundInfo.innerText = (`${playerSelection} ganha de ${computerChoice}`);
        playerWin += 1;
    }
    else if (playerSelection === 'PEDRA' && computerChoice === 'PAPEL'){
        roundInfo.innerText = (`${playerSelection} perde de ${computerChoice}`);
        computerWin += 1;
    }
    else if (playerSelection === 'PAPEL' && computerChoice === 'PEDRA'){
        roundInfo.innerText = (`${playerSelection} ganha de ${computerChoice}`);
        playerWin += 1;
    }
    else if (playerSelection === 'PAPEL' && computerChoice === 'TESOURA'){
        roundInfo.innerText = (`${playerSelection} perde de ${computerChoice}`);
        computerWin += 1;
    }
    else if (playerSelection === 'TESOURA' && computerChoice === 'PEDRA'){
        roundInfo.innerText = (`${playerSelection} perde de ${computerChoice}`);
        computerWin += 1;
    }
    else {
        roundInfo.innerText = (`${playerSelection} ganha de ${computerChoice}`)
        playerWin += 1;
    }
    updateScore(playerWin, computerWin);

    if (playerWin === 5){
        roundInfo.innerText = `Fim de jogo: Você: ${playerWin}. Computador: ${computerWin}. Você venceu!`;
        playerWon = true;
        endGame();
    }
    if (computerWin === 5){
        roundInfo.innerText = `Fim de jogo! Você: ${playerWin}. Computador: ${computerWin}. Você perdeu!`;
        computerWon = true;
        endGame();
        }
    }

// UI

// Selecionar todos os elementos html
let roundInfo = document.getElementById("gameinfo_description");
let p1icon = document.getElementById("p1icon");
let p1score = document.getElementById("player")
let p2icon = document.getElementById("p2icon");
let p2score = document.getElementById("computer");
let ui_rock = document.getElementById("rockBtn");
let ui_paper = document.getElementById("paperBtn");
let ui_scissors = document.getElementById("scissorsBtn");
let overlay = document.getElementById("overlay");
let endGameWindow = document.getElementById("endgame");
let endBtn = document.getElementById("endbtn");
let endMsg = document.getElementById("endmsg");

//adicionar a escuta para os eventos
ui_rock.addEventListener("click", () => getClick('PEDRA'));
ui_paper.addEventListener("click", () => getClick('PAPEL'));
ui_scissors.addEventListener("click", () => getClick('TESOURA'));
endBtn.addEventListener("click", () => resetGame());

//Definir a escolha do jogador e computador quando clica no ícone e jogar uma rodada
function getClick(playerSelection){
    if(playerWon === true || computerWon === true){
        resetGame();
    }
    let computerChoice = getComputerChoice();
    updateChoice(playerSelection, computerChoice);
    playRound(playerSelection, computerChoice);
}


//atualizar as escolhas do jogador e do computador, mostrar o ícone correto.
function updateChoice(playerSelection, computerChoice){
    
    switch(playerSelection){
        case 'PEDRA':
            p1icon.innerText = '👊';
            break;
        case 'PAPEL':
            p1icon.innerText = '✋';
            break;
        case 'TESOURA':
            p1icon.innerText = '✌️';
            break;
    }

    switch(computerChoice){
        case 'PEDRA':
            p2icon.innerText = '👊';
            break;
        case 'PAPEL':
            p2icon.innerText = '✋';
            break;
        case 'TESOURA':
            p2icon.innerText = '✌️';
            break;
    }
}

//atualizar o placar.
function updateScore(playerWin, computerWin){

    p1score.innerText = 'Jogador: ' + playerWin;
    p2score.innerText = 'Computador: ' + computerWin;
}


//Abrir a janela de fim de jogo com a informação de quem venceu e mostrar o botão de 
//reiniciar a partida
function endGame(){
    overlay.classList.add("active")
    if (playerWon === true){
        endMsg.innerText = `Você venceu! ${playerWin} A ${computerWin}`;
        return;
    }
    else{
        endMsg.innerText = `Você perdeu! ${computerWin} A ${playerWin}`;
        return;
    }
}

//reiniciar o jogo.
function resetGame(){
    p1score.innerText = 'Jogador: ';
    p2score.innerText = 'Computador: ';
    playerWin = 0;
    computerWin = 0;
    playerWon = false;
    computerWon = false;
    roundInfo.innerText = 'Quem fizer 5 pontos primeiro vence!';
    overlay.classList.remove("active");
}