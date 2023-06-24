
function getComputerChoice(){
    let x= Math.ceil((Math.random()*3));
    
    let choice= "";
    if (x==1){
        choice= "rock";
    }
    else if(x==2){
        choice= "paper";
    }
    else{
        choice= "scissor";
    }
    return choice;
}
var computerPoints = 0;
var playerPoints = 0;

function playRound(computerChoice, playerChoice){

    if( computerChoice == playerChoice ){

        ++playerPoints;
        return true;
    }
    else if(playerChoice == "rock" && computerChoice == "scissor"){

         ++playerPoints;
         return true;
    }
    else if(playerChoice =="paper" && computerChoice == "rock"){

        ++playerPoints;
        return true;
    } 
    else if(playerChoice == "scissor" && computerChoice == "paper"){

        ++playerPoints;
        return true;
    }
    else {

        ++computerPoints;
        return false;
    }
}

function playGame(){

    console.log("Game Start");

    for(let i =0; i<5; ++i){

        let playerChoice = prompt("Your Choice? ", "");
        playerChoice=playerChoice.toLowerCase();
        let computerChoice= getComputerChoice();

        if(playRound(computerChoice, playerChoice)){
            console.log("You win "+playerChoice + " beats "+computerChoice);
        }
        else if(playRound(computerChoice, playerChoice)==false){
            console.log("You lose "+ computerChoice+" beats "+playerChoice);
        }        
   } 
     console.log("Computer Points: " + computerPoints);
     console.log("Player Points: " + playerPoints);

    if(playerPoints > computerPoints){
        console.log("You Win this Game!!");
    } else if(playerPoints < computerPoints){
        console.log("You Lose this Game!!");
    } else {
        console.log("The game ended in a tie.");
      }
}
playGame();