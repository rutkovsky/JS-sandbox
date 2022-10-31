const MIN = 0
const MAX = 100
const ATTEMPTS_NUMBER = 10

const getRandomNumber = (maxLimit) => {
    const randomNumber = Math.round(Math.random() * maxLimit)
    return randomNumber
}

const getPlayerName = () => {
    const playerName = prompt("Привет! Как тебя зовут?", "")
    return playerName
}

const RANDOM_NUMBERS = getRandomNumber(MAX)
const PLAYER_NAME = getPlayerName()

const game = (min, max, attNumber, randomNumber, playerName) => {
    console.log(randomNumber);
    alert(`${playerName}, я загадал число в интервале от ${min} до ${max}.
    У тебя есть ${attNumber} попыток, чтобы отгадать его. Поехали?`)
    for (let index = 1; index <= attNumber; index++) {
        const answer = prompt("Какое число я загадал?")
        let attempt = "попыток"
        if ((attNumber-index) < 5 && (attNumber - index) > 1) {
            attempt = "попытки"
        } else if((attNumber-index) === 1) {
            attempt = "попытка"
        }
        if (!Number.isNaN(Number(answer))) {
            if (answer > randomNumber) {
                alert(`Твое число больше. У тебя осталось ${attNumber-index} ${attempt}.`)
            } else if (answer < randomNumber) {
                alert(`Твое число меньше. У тебя осталось ${attNumber-index} ${attempt}.`)
            } else {
                alert(`Молодец, ${playerName}, ты угадал за ${index} попыток.`)
                return
            }
        } else {
            alert(`Ты ввел не число. У тебя осталось ${attNumber-index} ${attempt}.`)
        }
    }
    alert(`${playerName}, ты проиграл. У тебя было ${attNumber} попыток.`)
}
game(MIN, MAX, ATTEMPTS_NUMBER, RANDOM_NUMBERS, PLAYER_NAME)
