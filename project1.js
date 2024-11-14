var jeu = document.getElementById('jeu')
var a = document.getElementsByClassName('a')
var players = ['X', 'O']
var  player = players[0]
var  gameOver = false 

var result = document.createElement('h2')
result.textContent = "X's turn!"
jeu.after(result)

var arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



function checkWin(player) {
    for (let i = 0; i < arr.length; i++) {
        var [x, y, z] = arr[i]
        if (a[x].textContent === player &&
            a[y].textContent === player &&
            a[z].textContent === player) {
            return true
        }
    }
    return false
}

function checkTie() {
    for (let i = 0; i < a.length; i++) {
        if (a[i].textContent === '') {
            return false
        }
    }
    return true
}

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        if (a[i].textContent !== '' || gameOver) {
            
            return
        }
        a[i].textContent = player
        if (checkWin(player)) {
            result.textContent = `Game over! ${player} wins!`
            gameOver = true 
            return
        }
        if (checkTie()) {
            result.textContent = "Game is tied!"
            gameOver = true 
            return
        }
        player = (player === players[0]) ? players[1] : players[0]
        result.textContent = `${player}'s turn!`
    })
}



function restartButton() {
    for (let i = 0; i < a.length; i++) {
        a[i].textContent = ""
    }
    result.textContent = "X's turn!"
    player = players[0]
    gameOver = false 
}