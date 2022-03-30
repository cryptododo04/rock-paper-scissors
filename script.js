
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
