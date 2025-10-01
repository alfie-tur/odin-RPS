function getComputerChoice(){
    let compNum = Math.random() * 100;
    let compChoice;
    
    if(compNum > 66){
        compChoice = "Rock"
        console.log(compChoice)
        return compChoice;
    }
    else if(compNum > 33 && compNum < 66){
        compChoice = "Paper"
        console.log(compChoice)
        return compChoice;
    }
    else if(compNum < 33){
        compChoice = "Scissors"
        console.log(compChoice)
        return compChoice;
    }
}

function getUserChoice(){
    let userChoice = prompt("please enter your choice rock, paper or scissors.");
    let userResult = userChoice.toLowerCase();
    console.log(userResult);
    return userChoice;
}

let userScore = 0;
let compScore = 0;

function playRound(humanChoice, computerChoice){
    // if statements for if the user gains a point
    if(humanChoice == "rock" && computerChoice == "Scissors"){
        userScore = userScore + 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "Paper"){
        userScore = userScore + 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Rock"){
        userScore = userScore + 1;
    }
    // if statements for if the computer gains a point
    else if(humanChoice == "scissors" && computerChoice == "Rock"){
        compScore = compScore + 1;
    }
    else if(humanChoice == "rock" && computerChoice == "Paper"){
        compScore = compScore + 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Scissors"){
        compScore = compScore + 1;
    }
    // else for anything else
    else{
        console.log("No winner");
    }
    console.log("User's Score: " + userScore);
    console.log("Computer's Score: " + compScore);
}

let rounds = parseInt(prompt("How many round would you like to play?"));
const usersSelection = getUserChoice();
const compSelection = getComputerChoice();



for (let i = 1; i <= rounds; i++){
    playRound(usersSelection, compSelection);
}
