const computerPlay = () => {  
    //function for generating a random rock, paper, scissor
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


// for setting the image for the computer selection 
const computerImage = () => {
if(computerPlay() == "rock"){
    document.querySelector(".computer img").setAttribute("src", "./images/rock.png");
    return "rock";
}
if(computerPlay() == "paper"){
    document.querySelector(".computer img").setAttribute("src", "./images/paper.png");
    return "paper";
}
if(computerPlay() == "scissor"){
    document.querySelector(".computer img").setAttribute("src", "./images/scissor.png");
    return "scissor";
}
}

let playerCount = 0;
let computerCount = 0;

function playRound(computerSelection, playerSelection){
     if(computerSelection == "rock" && playerSelection == "scissor"){
         ++computerCount;
         document.querySelector(".winner").textContent = "Computer wins! 🎉"
        document.querySelector(".result .computerScore").textContent = `Computer: ${computerCount}`;
     } 
     if(computerSelection == "rock" && playerSelection == "paper"){
         ++playerCount;
         document.querySelector(".winner").textContent = "Player wins! 🎉"
         document.querySelector(".result .playerScore").textContent = `Player: ${playerCount}`;    
     }
     if(computerSelection == "paper" && playerSelection == "rock"){
         ++computerCount;
         document.querySelector(".winner").textContent = "Computer wins! 🎉"
         document.querySelector(".result .computerScore").textContent = `Computer: ${computerCount}`;
     }
     if(computerSelection == "paper" && playerSelection == "scissor"){
         ++playerCount;
         document.querySelector(".winner").textContent = "Player wins! 🎉"
         document.querySelector(".result .playerScore").textContent = `Player: ${playerCount}`;
     }
     if(computerSelection == "scissor" && playerSelection == "paper"){
         ++computerCount;
         document.querySelector(".winner").textContent = "Computer wins! 🎉"
         document.querySelector(".result .computerScore").textContent = `Computer: ${computerCount}`;
     }
     if(computerSelection == "scissor" && playerSelection == "rock"){
         ++playerCount;
         document.querySelector(".winner").textContent = "Player wins! 🎉"
         document.querySelector(".result .playerScore").textContent = `Player: ${playerCount}`;
     }
     if(computerSelection == playerSelection){
        document.querySelector(".winner").textContent = "Match Drawn";
     }
}


//function for getting the classname of the clicked image
const playerSelected = (className) => {
    if(className == "rock"){
        playRound(computerImage(), className);
        return "rock";
    } else
    if(className == "paper"){
        playRound(computerImage(), className);
        return "paper";
    } else {
        playRound(computerImage(), className);
        return "scissor";
    }
}







