let cards = document.getElementById("cards")
let die11 = document.getElementById("die1")
let die22 = document.getElementById("die2")
let die33 = document.getElementById("die3")
let words = document.getElementById("words")
let words2 = document.getElementById("words2")

let totalCards = 0

let die1 = 0
let die2 = 0
let die3 = 0

function random() {
    die1 = Math.floor(Math.random()* 6) + 1
    die2 = Math.floor(Math.random()* 9) 
    die3 = Math.floor(Math.random()* 20) + 1
    die11.textContent = die1
    die22.textContent = die2
    die33.textContent = die3
}

function cD1() {
    if (die1 == 6) {
        words.textContent = "Possible Penalty!"
    } else {
        words.textContent = " "
    }
    if (die1 == die2) {
        if (die2 == die3) {
            words2.textContent = "Possible Injury!"
        }
    } else {
        words2.textContent = " "
    }
}

function roll() {
    random()
    cD1()
    die11.textContent = die1
    die22.textContent = die2
    die33.textContent = die3
}

function reset() {
    die11.textContent = "0"
    die22.textContent = "0"
    die33.textContent = "0"
}


