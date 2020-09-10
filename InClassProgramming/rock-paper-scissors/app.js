var button = document.getElementsByClassName("button")
var clear = document.getElementsByClassName("buttonClear")

let rock_paper_scissors = ["rock", "paper", "scissors"]

let player_choice = {
    hand : rock_paper_scissors[null]
}

let opponent_choice = {
    hand : rock_paper_scissors[null]
}

const win = 1
const loss = 2
const tie = 3

function compareHands() {
    //Rock paper scissors logic

    //rock
    if (player_choice.hand === "rock" && opponent_choice.hand === "rock") {
        return tie
    }
    if (player_choice.hand === "rock" && opponent_choice.hand === "paper") {
        return loss
    }
    if (player_choice.hand === "rock" && opponent_choice.hand === "scissors") {
        return win
    }

    //paper
    if (player_choice.hand === "paper" && opponent_choice.hand === "paper") {
        return tie
    }
    if (player_choice.hand === "rock" && opponent_choice.hand === "scissors") {
        return loss
    }
    if (player_choice.hand === "paper" && opponent_choice.hand === "rock") {
        return win
    }

    //scissors
    if (player_choice.hand === "scissors" && opponent_choice.hand === "scissors") {
        return tie
    }
    if (player_choice.hand === "scissors" && opponent_choice.hand === "rock") {
        return loss
    }
    if (player_choice.hand === "scissors" && opponent_choice.hand === "paper") {
        return win
    }
}

