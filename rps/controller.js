var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame();
    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again
    let numberOfRounds = parseInt(prompt("How many rounds of Rock, Paper, Scissors do you want to play? Enter a number between 1 and 5."));

    if (isNumberOfRoundsValid(numberOfRounds)) {

        game.setNumberOfRounds(numberOfRounds);

    } else {

        numberOfRounds = parseInt(prompt("Invalid entry. Please enter a valid number between 1 and 5"));

        if (isNumberOfRoundsValid(numberOfRounds)) {

            game.setNumberOfRounds(numberOfRounds);

        }
    }

    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    for (var i = 1; i <= numberOfRounds; i++) {

        playRound(i);
        i++;

    }

    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log("Player Wins: " + game.countOfPlayerWins);
    console.log("Computer Wins: " + game.countOfComputerWins);
    console.log("Ties: " + game.countOfTies);
    console.log("Number of Rounds Played: " + game.numberOfRounds);
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log("Round: " + roundNumber);
    console.log("Player Score: " + game.countOfPlayerWins + " Computer Score: " + game.countOfComputerWins + " Ties: " + game.countOfTies);
    
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log("Player Score: " + game.countOfPlayerWins + " Computer Score: " + game.countOfComputerWins + " Ties: " + game.countOfTies);
    console.log("Winner: " + outcome);
}

/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    let playerSelection = prompt("Choose Rock, Paper, or Scissors!");

    if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {

        playerSelection = "rock";

    } else {

        return playerSelection;

    }
}