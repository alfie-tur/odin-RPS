function getComputerChoice(){
    let compNum = Math.random() * 100;
    let compChoice;
    
    if(compNum > 66){
        compChoice = "Rock"
    }
    else if(compNum > 33 && compNum < 66){
        compChoice = "Paper"
    }
    else if(compNum < 33){
        compChoice = "Scissors"
    }
    console.log(compChoice)
}

function getUserChoice(){
    let userInput = prompt("please enter either rock paper or scissors");
    
}

let userScore = 0;
let compScore = 0;

function playRound(user, comp){
    
}
console.log(playRound(userInput, compChoice))