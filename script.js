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

const computerSelection = computerPlay(); //option selected randomly by computer

// for setting the image for the computer selection 

const computerImage = () => {
if(computerSelection == "rock"){
    document.querySelector(".computer img").setAttribute("src", "./images/rock.png");
}
if(computerSelection == "paper"){
    document.querySelector(".computer img").setAttribute("src", "./images/paper.png");
}
if(computerSelection == "scissor"){
    document.querySelector(".computer img").setAttribute("src", "./images/scissor.png");
}
}

function playRound(computerSelection, playerSelection){
    
}
//ye nhi chal raha hai continue from this function
const playerSelected = () => {
    if(this.className == "rock"){
        console.log("rock");
    } else
    if(this.className == "paper"){
        return "paper";
    } else {
        return "scissor";
    }
}


playRound(computerPlay(), playerSelected())





