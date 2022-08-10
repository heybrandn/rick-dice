let cards = document.getElementById("cards")
let die11 = document.getElementById("die1")
let die22 = document.getElementById("die2")
let die33 = document.getElementById("die3")
let die1111 = document.getElementById("die11")
let die2222 = document.getElementById("die22")
let words = document.getElementById("words")
let words2 = document.getElementById("words2")



let cards2 = document.getElementById("cards2")
let die44 = document.getElementById("die4")
let die55 = document.getElementById("die5")
let die66 = document.getElementById("die6")
let words3 = document.getElementById("words3")
let words4 = document.getElementById("words4")


let die1 = 0
let die2 = 0
let die111 = 0
let die222 = 0
let die3 = 0
let die4 = 0
let die5 = 0
let die6 = 0

function random() {
    die1 = Math.floor(Math.random()* 6) + 1
    die2 = Math.floor(Math.random()* 9) 
    die3 = Math.floor(Math.random()* 20) + 1
    die11.textContent = die1
    die22.textContent = die2
    die33.textContent = die3
}

function random1() {
    die111 = Math.floor(Math.random()* 9)
    die222 = Math.floor(Math.random()* 9) 
    die1111.textContent = die11
    die2222.textContent = die22
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

function cD11() {
}

function roll1() {
    random1()
    cD11()
    die1111.textContent = die111
    die2222.textContent = die222
}

function reset1() {
    die1111.textContent = "0"
    die2222.textContent = "0"
}



function roll() {
    random()
    cD1()
    die111.textContent = die11
    die222.textContent = die22
}

function reset() {
    die11.textContent = "0"
    die22.textContent = "0"
    die33.textContent = "0"
}



function random2() {
    die4 = Math.floor(Math.random()* 12) + 1
    die5 = Math.floor(Math.random()* 12) + 1
    die6 = Math.floor(Math.random()* 12) + 1
    die44.textContent = die4
    die55.textContent = die5
    die66.textContent = die6
}

function cD2() {
    if (die4 == die5) {
        if (die5 == die6) {
            words4.textContent = "Possible Injury!"
        }
    } else {
        words4.textContent = " "
    }
}

function roll2() {
    random2()
    cD2()
    die44.textContent = die4
    die55.textContent = die5
    die66.textContent = die6
}

function reset2() {
    die44.textContent = "0"
    die55.textContent = "0"
    die66.textContent = "0"
}
