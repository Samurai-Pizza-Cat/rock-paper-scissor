
document.querySelector('#rockButton').addEventListener('click', playRock)
document.querySelector('#scissorButton').addEventListener('click', playScissor)
document.querySelector('#paperButton').addEventListener('click', playPaper)
document.querySelector('#rockImage').addEventListener('click', showSirButton)
document.querySelector('#sirButton').addEventListener('click', sirWin)

document.querySelector('#sirButton').style.visibility = 'hidden'

function sirWin() {
    document.querySelector('#computerDisplay').innerHTML = "...Runs away in fear"
    document.querySelector('#display').style.visibility = 'hidden'
    document.querySelector('#resultDisplay').innerHTML = 'Mr Sir Wins'
}


function showSirButton() {
    console.log('bread')
    document.querySelector('#sirButton').style.visibility = 'visible'
}


function playRock() {
    let computerResult = Math.floor(Math.random() * 3)
    let userResult = 0

    // Computer Rock
    if (computerResult == 0 && userResult == 0) {
        document.querySelector('#computerDisplay').innerHTML = "Rock"
        document.querySelector('#humanDisplay').innerHTML = "Rock"
        document.querySelector('#resultDisplay').innerHTML = 'Draw'
    } else if (computerResult == 2 && userResult == 0) {
        document.querySelector('#computerDisplay').innerHTML = "Scissor"
        document.querySelector('#humanDisplay').innerHTML = "Rock"
        document.querySelector('#resultDisplay').innerHTML = 'Win'
    } else if (computerResult == 1 && userResult == 0) {
        document.querySelector('#computerDisplay').innerHTML = "Paper"
        document.querySelector('#humanDisplay').innerHTML = "Rock"
        document.querySelector('#resultDisplay').innerHTML = 'Lose'
    }
}



function playPaper() {
    let computerResult = Math.floor(Math.random() * 3)
    let userResult = 1

    // Computer Paper
    if (computerResult == 1 && userResult == 1) {
        document.querySelector('#computerDisplay').innerHTML = "Paper"
        document.querySelector('#humanDisplay').innerHTML = "Paper"
        document.querySelector('#resultDisplay').innerHTML = 'Draw'
    } else if (computerResult == 0 && userResult == 1) {
        document.querySelector('#computerDisplay').innerHTML = "Rock"
        document.querySelector('#humanDisplay').innerHTML = "Paper"
        document.querySelector('#resultDisplay').innerHTML = 'Win'
    } else if (computerResult == 2 && userResult == 1) {
        document.querySelector('#computerDisplay').innerHTML = "Scissor"
        document.querySelector('#humanDisplay').innerHTML = "Paper"
        document.querySelector('#resultDisplay').innerHTML = 'Lose'
    } 

}

function playScissor() {

    let computerResult = Math.floor(Math.random() * 3)
    let userResult = 2

    if (computerResult == 2 && userResult == 2) {
        document.querySelector('#computerDisplay').innerHTML = "Scissor"
        document.querySelector('#humanDisplay').innerHTML = "Scissor"
        document.querySelector('#resultDisplay').innerHTML = 'Draw'
    } else if (computerResult == 1 && userResult == 2) {
        document.querySelector('#computerDisplay').innerHTML = "Paper"
        document.querySelector('#humanDisplay').innerHTML = "Scissor"
        document.querySelector('#resultDisplay').innerHTML = 'Win'
    }
    else if (computerResult == 0 && userResult == 2) {
        document.querySelector('#computerDisplay').innerHTML = "Rock"
        document.querySelector('#humanDisplay').innerHTML = "Scissor"
        document.querySelector('#resultDisplay').innerHTML = 'Lose'
    } 

}
