

/* function to create a random number between 1 and 3
 to asign the computer a selection to be returned */

function computerPlay() {
    
    /*create variable to store a random number between 0 and 2 */
    let randomNumber = Math.floor(Math.random()*3);


    /* if randomNumber === 0 is rock */
    if(randomNumber === 0){
        return 'Rock';
    }

    /* if randomNumber === 1 */
    else if (randomNumber === 1){
        return 'Paper';
    }

    /* if randomNumber === 2 */
    else
    return 'Scissors'; 
    
}

/* function to play a single round of rock paper scissors */

function singleRound(playerSelection,computerSelection){


    /*convert player selection string to lower case */
    playerSelection = playerSelection.toLowerCase();

    /*create local variable to store playerSelection string*/
    let string = playerSelection;


    /*Capitalize first letter of playerSelection string and add rest of lowercase string */
    playerSelection = playerSelection.charAt(0).toUpperCase() + string.slice(1);


    /*evaluate acording to playerSelection which case is being use */
    switch(true) {

        /*player choose 'Rock' */
        case playerSelection === 'Rock':

            if(computerSelection === 'Paper'){
                console.log("Computer Chose Paper");
                console.log("Paper beats Rock, You Lose!");
                return 'You Lose!';
            }
            else if(computerSelection === 'Rock'){
                console.log("Computer chose Rock");
                console.log("Tied game!");
                return 'Tied Game!';
            }
            else {
                console.log("Computer chose Scissors");
                console.log("Rock beats Scissors, You Win!");
                return 'You Win!';
            }
            
        
        /*player choose 'Paper' */
        case playerSelection === 'Paper':
            if(computerSelection === 'Scissors'){
                console.log("Computer Chose Scissors");
                console.log("Scissors beats Paper, You Lose!");
                return 'You Lose!';
            }
            else if(computerSelection === 'Paper'){
                console.log("Computer chose Paper");
                console.log("Tied game!");
                return 'Tied Game!';
            }
            else{
                console.log("Computer chose Rock");
                console.log("Paper beats Rock, You Win!");
                return 'You Win!';
            }
        
        /*player choose 'Scissors' */
        case playerSelection === 'Scissors':
            if(computerSelection === 'Rock'){
                console.log("Computer chose Rock");
                console.log("Rock beats Scissors, You Lose!");
                return 'You Lose!';
            }
            else if(computerSelection === 'Scissors'){
                console.log("Computer chose Scissors");
                console.log("Tied game!");
                return 'Tied Game!';
            }
            else{
                console.log("Computer chose Paper");
                console.log("Scissors beats Paper, You Win!");
                return 'You Win!';

            }
            
        
        /*player wrote wrong input option */
        default:
            console.log('Error! Incorrect option check player selection input');
            return 'error';
    }

}

function game(){

    let playerSelection,computerSelection;

    /*Variable initialization */
    let playerCount = 0;
    let computerCount = 0;


    for (let i = 0; i < 5; i++) {
        
        let result = '';

        /*player chooses rock-paper-scissors and it's stored in playerSelection */
        playerSelection = prompt("Choose Rock-Paper-Scissors")

        /*Computer generates random choice and stores it in computerSelection */
        computerSelection = computerPlay();

        /*Display current round number */
        console.log(`Round No ${i+1}:`);

        /*Display what the player selected */
        console.log(`you chose ${playerSelection}`);



        result = singleRound(playerSelection,computerSelection);

        
        /* evaluation to see if player win or lose */

        if (result === 'You Win!'){
            playerCount = playerCount + 1;
        }
        else if (result === 'You Lose!'){
            computerCount = computerCount + 1;
        }

        /* Display current scores */

        console.log(`You have won ${playerCount} times`);
        console.log(`the computer has won ${computerCount} times`);
        
     }

     /*evaluate who won the game and inform the outcome */

     if(playerCount > computerCount) {

        console.log("Congratulations! You have won the game!");
     }
     else if (playerCount < computerCount) {

        console.log("Oh no! you have lost the game to the computer! better luck next time");

     }
     else
     console.log("The game ended up in a tie!");


}
