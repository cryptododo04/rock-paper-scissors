
function computerPlay() {
    
    /*create variable to store a random number between 1 and 100 */
    let randomNumber = Math.floor(Math.random()*100)+ 1;

    /* if randomNumber <=33 is rock */
    if(randomNumber <= 33){
        return 'Rock';
    }

    /* if randomNumber >33 && randomNumber <=66 is paper */
    else if (randomNumber >33 && randomNumber <= 66){
        return 'Paper';
    }

    /* if randomNumber >66 && randomNumber <=100 is scissors */
    else
    return 'Scissors'; 
    
}


function singleRound(playerSelection,computerSelection){

    console.log(computerSelection);

    /*convert player selection string to lower case */
    playerSelection = playerSelection.toLowerCase();

    /*create local variable to store playerSelection string*/
    let string = playerSelection;


    /*Capitalize first letter of playerSelection string and add rest of lowercase string */
    playerSelection = playerSelection.charAt(0).toUpperCase() + string.slice(1);

    console.log(playerSelection);

    /*evaluate acording to playerSelection which case is being use */
    switch(true) {

        /*player choose 'Rock' */
        case playerSelection === 'Rock':

            if(computerSelection === 'Paper'){
                return 'You Lose! Paper beats Rock';
            }
            else if(computerSelection === 'Rock'){
                return 'Tied game! Both picks were Rock';
            }
            else
            return 'You Win! Rock beats Scissors';
        
        /*player choose 'Paper' */
        case playerSelection === 'Paper':
            if(computerSelection === 'Scissors'){
                return 'You Lose! Scissors beats Paper';
            }
            else if(computerSelection === 'Paper'){
                return 'Tied game! Both picks were Paper';
            }
            else
            return 'You Win! Paper beats Rock';
        
        /*player choose 'Scissors' */
        case playerSelection === 'Scissors':
            if(computerSelection === 'Rock'){
                return 'You Lose! Rock beats Scissors';
            }
            else if(computerSelection === 'Scissors'){
                return 'Tied game! Both picks were Scissors';
            }
            else
            return 'You Win! Scissors beats Paper';
        
        default:
            return 'Error check player Selection input';
    }

}


/*create variable to store string and convert all of it to lower case*/


