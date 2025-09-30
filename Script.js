function getComputerChoice(){
    let compChoice;
    let rounds = parseInt(prompt("how many games would you like to play"));
    for(let i = 1; i <= rounds; i++){
        let compNum = parseInt(Math.random() * 100);
        
        let userChoice = prompt("Please enter rock, paper or scissors");
        console.log(compNum);

        if (compNum <= 33){
            compChoice = "rock"
            console.log(compChoice);
        }
        else if (compNum > 33 && compNum <= 66){
            compChoice = "paper"
            console.log(compChoice);
        }
        else{
            compChoice = "scissors"
            console.log(compChoice);
        }
    }
}
console.log(getComputerChoice());