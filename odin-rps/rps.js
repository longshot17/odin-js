let computerScore = 0;
let humanScore = 0;
let count = 0;
function getComputerChoice(){
    let num = Math.random();
    let choice = null;
    if(num <= .33){
        choice = "rock";
    }
    else if(num <=.66){
        choice= "paper";
    }
    else{
        choice = "scissors";
    }

    return choice;
}

function showResults(){
    if(computerScore > humanScore){
        element = document.createElement("p");
        element.textContent = "You Lose!";
        results.append(element);
    }
    else if (humanScore>computerScore){
        element = document.createElement("p");
        element.textContent = "You Lose!";
        results.append(element);
    }
    else{
        element = document.createElement("p");
        element.textContent = "It's a Tie!";
        results.append(element);
    }
}




function playRound(computerChoice, humanChoice){

    if(count >= 5){
        return;
    }

    if(humanChoice == "rock"){
        if(computerChoice =="rock"){
            element = document.createElement("p");
            element.textContent = "Tie! Rock matches Rock!";
            results.append(element);
        }
        if(computerChoice == "paper"){
            element = document.createElement("p");
            element.textContent = "Loss! Rock loses to Paper!";
            results.append(element);
        }
        if(computerChoice == "scissors"){
            element = document.createElement("p");
            element.textContent = "Win! Rock beats Scissors!";
            results.append(element);
        }
    }

    if(humanChoice == "scissors"){
        if(computerChoice =="rock"){
            element = document.createElement("p");
            element.textContent = "Loss! Scissors loses to Rock!";
            results.append(element);
        }
        if(computerChoice == "paper"){
            element = document.createElement("p");
            element.textContent = "Win! Scissors beats Paper!";
            results.append(element);
        }
        if(computerChoice == "scissors"){
            element = document.createElement("p");
            element.textContent = "Tie! Scissors matches Scissors!";
            results.append(element);
        }
    }

    if(humanChoice == "paper"){
        if(computerChoice =="rock"){
            element = document.createElement("p");
            element.textContent = "Win! Paper beats Rock!";
            results.append(element);
        }
        if(computerChoice == "paper"){
            element = document.createElement("p");
            element.textContent = "Tie! Paper matches Paper!";
            results.append(element);
        }
        if(computerChoice == "scissors"){
            element = document.createElement("p");
            element.textContent = "Loss! Paper loses to Scissors!";
            results.append(element);
        }
    }

    count = count + 1;
    if(count == 5){
        showResults();

    }


}



let rock_btn = document.querySelector("#rock-btn");
rock_btn.addEventListener("click", function(){
    playRound(getComputerChoice(),"rock");
})
let scissors_btn = document.querySelector("#scissors-btn");
scissors_btn.addEventListener("click", function(){
    playRound(getComputerChoice(),"scissors");
})
let paper_btn = document.querySelector("#paper-btn");
paper_btn.addEventListener("click", function(){
    playRound(getComputerChoice(),"paper");
})
results = document.querySelector("#results");





//playGame();

   





