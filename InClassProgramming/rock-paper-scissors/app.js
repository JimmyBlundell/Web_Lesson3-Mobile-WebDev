var button = document.getElementsByClassName("button")
var opponentHand = document.getElementById("opponentHand")
var result = document.getElementById("result")

//Array for hand choice
let rock_paper_scissors = ["Rock", "Paper", "Scissors"]

let player_choice = {
    hand : rock_paper_scissors[null]
}

let opponent_choice = {
    hand : rock_paper_scissors[null]
}

//Game results that will be displayed on screen
const win = "You win! :)"
const loss = "You lose! :("
const tie = "It's a tie!"

function compareHands() {
    //Rock paper scissors logic

    //rock
    if (player_choice.hand === "Rock" && opponent_choice.hand === "Rock") {
        return tie
    }
    if (player_choice.hand === "Rock" && opponent_choice.hand === "Paper") {
        return loss
    }
    if (player_choice.hand === "Rock" && opponent_choice.hand === "Scissors") {
        return win
    }

    //paper
    if (player_choice.hand === "Paper" && opponent_choice.hand === "Paper") {
        return tie
    }
    if (player_choice.hand === "Paper" && opponent_choice.hand === "Scissors") {
        return loss
    }
    if (player_choice.hand === "Paper" && opponent_choice.hand === "Rock") {
        return win
    }

    //scissors
    if (player_choice.hand === "Scissors" && opponent_choice.hand === "Scissors") {
        return tie
    }
    if (player_choice.hand === "Scissors" && opponent_choice.hand === "Rock") {
        return loss
    }
    if (player_choice.hand === "Scissors" && opponent_choice.hand === "Paper") {
        return win
    }
}

// Add event listener to buttons, randomly generate an opponent hand, and compare result
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        switch (this.innerHTML) {
            case "Rock":
            {
                player_choice.hand = "Rock";
                opponent_choice.hand = rock_paper_scissors[Math.floor((Math.random() * 3))];
                opponentHand.innerHTML = opponent_choice.hand;
                result.innerHTML = compareHands();
                break;
            }
            case "Paper":
            {
                player_choice.hand = "Paper";
                opponent_choice.hand = rock_paper_scissors[Math.floor((Math.random() * 3))];
                opponentHand.innerHTML = opponent_choice.hand;
                result.innerHTML = compareHands();
                break;
            }
            case "Scissors":
            {
                player_choice.hand = "Scissors";
                opponent_choice.hand = rock_paper_scissors[Math.floor((Math.random() * 3))];
                opponentHand.innerHTML = opponent_choice.hand;
                result.innerHTML = compareHands();
                break;
            }
            case "Clear": //Clear the inner HTML elements on screen for opponent hand and result
            {
                opponentHand.innerHTML = "";
                result.innerHTML = "";
                break;
            }
            default:
            {
                //Nothing to do here
                break;
            }
        }
    })
}