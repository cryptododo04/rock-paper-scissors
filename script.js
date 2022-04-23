let rounds = 0, playerWinRounds = 0, computerWinRounds = 0;


// Creation of button nodes
const rockBtn = document.querySelector('#rock-input');

const paperBtn = document.querySelector('#paper-input');

const scissorsBtn = document.querySelector('#scissors-input');

const rockTextBtn = document.querySelector('#rock-text-button');

const paperTextBtn = document.querySelector('#paper-text-button');

const scissorsTextBtn = document.querySelector('#scissors-text-button');




//creation of event listeners on play buttons
rockBtn.addEventListener('click', () => playRound('rock'));

paperBtn.addEventListener('click', () => playRound('paper'));

scissorsBtn.addEventListener('click', () => playRound('scissors'));

rockTextBtn.addEventListener('click', () => playRound('rock')); 

paperTextBtn.addEventListener('click', () => playRound('paper'));

scissorsTextBtn.addEventListener('click', () => playRound('scissors'));




//create scores nodes

const playerScore = document.querySelector('#playerScore');

const computerScore = document.querySelector('#computerScore');

console.log(playerScore);

console.log(computerScore);


//


//create body node
const main = document.querySelector('main');

console.log(main);

//create result container node

const resultDivContainer = document.createElement('div');

resultDivContainer.id = 'resultDivContainer';

//create resultDiv node

const resultDiv = document.createElement('div');

resultDiv.id = 'resultDiv';


resultDivContainer.appendChild(resultDiv);

resultDiv.textContent = ''

main.appendChild(resultDivContainer);

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


function singleRound(playerSelection){

    //after the first click (first round) add styles to result div
    //to avoid showing empty divs with borders and colors

    resultDivContainer.classList.add('black-border');
    resultDivContainer.classList.add('blue-background');

    resultDiv.classList.add('white-border');
    resultDiv.classList.add('black-white');


    //computer selection
    computerSelection = computerPlay();

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
                resultDiv.innerText = "Computer Chose Paper\n Paper beats Rock, You Lose!"; 
                console.log("Computer Chose Paper");
                console.log("Paper beats Rock, You Lose!");
                return 'You Lose!';
            }
            else if(computerSelection === 'Rock'){
                
                resultDiv.innerText = "Computer Chose Rock\n Tied game!"; 
                console.log("Computer chose Rock");
                console.log("Tied game!");
                return 'Tied Game!';
            }
            else {
                resultDiv.innerText = "Computer Chose scissors\n Rock beats Scissors, You win!"; 
                console.log("Computer chose Scissors");
                console.log("Rock beats Scissors, You Win!");
                return 'You Win!';
            }
            
        
        /*player choose 'Paper' */
        case playerSelection === 'Paper':
            if(computerSelection === 'Scissors'){

                resultDiv.innerText = "Computer Chose Scissors\n Scissors beats Paper, You Lose!"; 
                return 'You Lose!';
            }
            else if(computerSelection === 'Paper'){

                resultDiv.innerText = "Computer Chose Paper\n Tied game"; 
                return 'Tied Game!';
            }
            else{

                resultDiv.innerText = "Computer Chose Rock\n Paper beats Rock, You Win!"; 
                return 'You Win!';
            }
        
        /*player choose 'Scissors' */
        case playerSelection === 'Scissors':
            if(computerSelection === 'Rock'){
                
                resultDiv.innerText = "Computer Chose Rock\n Rock beats Scissors, You Lose!"; 
                console.log("Computer chose Rock");
                console.log("Rock beats Scissors, You Lose!");
                return 'You Lose!';
            }
            else if(computerSelection === 'Scissors'){

                resultDiv.innerText = "Computer Chose Scissors\n Tied game!"; 
                console.log("Computer chose Scissors");
                console.log("Tied game!");
                return 'Tied Game!';
            }
            else{

                resultDiv.innerText = "Computer Chose Paper\n Scissors beats Paper, You Win!"; 
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

//function to play single round and reflect scores

function playRound(playerSelection){

    
    let roundResult = singleRound(playerSelection);

    if(roundResult === 'You Win!'){

        ++playerWinRounds;

        playerScore.textContent = `Player: ${playerWinRounds}`


    }

    else if(roundResult === 'You Lose!'){
        
        ++computerWinRounds;
        
        computerScore.textContent = `Computer: ${computerWinRounds}`;

    }

    if(playerWinRounds === 5 || computerWinRounds === 5){

        //disable buttons to stop game
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled =true;

        rockTextBtn.disabled = true;
        paperTextBtn.disabled = true;
        scissorsTextBtn.disabled = true;

        //create container div for replay button
        const replayDivContainer = document.createElement('div');

        replayDivContainer.id = "replay-container";

        //create replay button to reload page to play again
        const replayBtn = document.createElement('button');

        replayBtn.id='replay-button';

        replayBtn.textContent = 'Play again!';

        replayBtn.classList.add('black-white')

        replayDivContainer.appendChild(replayBtn);

        main.appendChild(replayDivContainer);

        replayBtn.addEventListener('click', () => reloadGame());

        //If player wins: 

        if(playerWinRounds === 5){
            resultDiv.textContent = 'Congratulations you won!!!';
        }
        //if Computer wins
        else if(computerWinRounds === 5){
            resultDiv.textContent = 'Oh no! Computer won :(';
        }


    }

}

//function to reload web page to start over
function reloadGame(){

    window.location.reload();
}

