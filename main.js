const message = document.querySelector('.message')
const player1Dice = document.querySelector('.player1Dice')
const player2Dice = document.querySelector('.player2Dice')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const player1Scoreboard = document.querySelector('.player1Scoreboard')
const player2Scoreboard = document.querySelector('.player2Scoreboard')

const rollDice = document.querySelector('.roll-dice')
const resetBtn = document.querySelector('.reset-btn')
let current1Class = ''
let current2Class = ''


rollDice.addEventListener('click', roll)
resetBtn.addEventListener('click', reset)

function randomInt() {
    let rand = Math.floor(Math.random() * 6) + 1
    return (rand)
}
let player1Turn = true
let player1Score = 0
let player2Score = 0

function roll() {

    if (player1Score < 20 & player2Score < 20) {
        if (player1Turn) {
            player1.style.border = "none"
            player2.style.border = "solid 1px white"

            let randomNum = randomInt()
            let showClass = 'show-' + randomNum;
            if (current1Class) {
                player1Dice.classList.remove(current1Class)
            }
            player1Dice.classList.add(showClass)
            current1Class = showClass
            player1Score += randomNum
            player1Scoreboard.textContent = player1Score

        } else {
            player2.style.border = "none"
            player1.style.border = "solid 1px white"

            let randomNum = randomInt()
            let showClass = 'show-' + randomNum;
            if (current2Class) {
                player2Dice.classList.remove(current2Class)
            }
            player2Dice.classList.add(showClass);
            current2Class = showClass;
            player2Score += randomNum
            player2Scoreboard.textContent = player2Score
        }
        player1Turn = !player1Turn
        if (player1Score >= 20) {
            message.textContent = "Player 1 Won 🎉"
        } else if (player2Score >= 20) {
            message.textContent = "Player 2 Won 🎉"
        }
    }
}

function reset() {
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = '0'
    player2Scoreboard.textContent = '0'
    player1Dice.classList.remove(current1Class)
    player2Dice.classList.remove(current2Class)
    message.textContent = "Let's Roll It 🎲"
}