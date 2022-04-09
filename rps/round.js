// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        let computerSelection = Math.floor(Math.random() * 4);

        switch (computerSelection) {

            case 1: return Selections.ROCK;
                    break;
            case 2: return Selections.PAPER;
                    break;
            case 3: return Selections.SCISSORS;
                    break;

        }
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.

        switch (this.playerSelection) {

            case "rock": if (this.computerSelection == "scissors") {
                                
                            return Outcomes.PLAYER_WINS;

                        } else if (this.computerSelection == "paper"){

                            return Outcomes.COMPUTER_WINS;

                        } else {

                            return Outcomes.TIE;

                        }
            case "paper": if (this.computerSelection == "rock") {
                            
                            return Outcomes.PLAYER_WINS;

                        } else if (this.computerSelection == "scissors") {

                            return Outcomes.COMPUTER_WINS;

                        } else {

                            return Outcomes.TIE;

                        }
            case "scissors": if (this.computerSelection == "paper") {

                                return Outcomes.PLAYER_WINS;

                            } else if (this.computerSelection == "rock"){

                                return Outcomes.COMPUTER_WINS;

                            } else {

                                return Outcomes.TIE;

                            }

        }
    }
}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;