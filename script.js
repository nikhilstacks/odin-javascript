function computerPlay(){
    const playerChoice = Math.floor(Math.random() * 3 + 1);
    if(playerChoice == 1){
        return "rock";
    }
    if(playerChoice == 2){
        return "paper";
    }
    if(playerChoice == 3){
        return "scissor";
    }
    return playerChoice;
}
function playRound(computerSelection, playerSelection){
    computerSelection = computerPlay();
    document.querySelector("h1").textContent = "Yo yo jesse here";
}
document.querySelector(".rock").addEventListener("click", playRound);
document.querySelector(".paper").addEventListener("click", playRound);
document.querySelector(".scissor").addEventListener("click", playRound);

