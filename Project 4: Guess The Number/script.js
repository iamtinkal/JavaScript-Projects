// const random_number = parseInt(Math.random() * 100) + 1

random_number = 70
// const input = document.querySelector('#guessField').value

record_guess = []

let input = document.querySelector('#guessField')


let sumbit = document.querySelector('#subt')

pending_guess = 10

play_game = true


if (play_game) {
    record_guess = []
    sumbit.addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(input.value);
        // input = parseInt(document.querySelector('#guessField').value)



        if (guess === random_number) {
            alert("Congratulation! You Won!")
            endGame()
        }
        else if (guess < random_number) {
            document.querySelector(".lowOrHi").innerHTML = "Guess is too Low!"
        }
        else {
            document.querySelector(".lowOrHi").innerHTML = "Guess is too high!"
        }
        // console.log(input);
        if (play_game) {
            record_guess.push(guess)
            document.querySelector('.guesses').innerHTML = record_guess

            input.value = ''

            remaining_guess = document.querySelector('.lastResult')
            remaining_guess.innerHTML -= 1
            pending_guess -= 1

            if (pending_guess === 0) {
                alert("You Lost!")
            }
        }


    })
}




// //end game
function endGame() {
    play_game = false
    input.value = ''
    input.setAttribute('disabled', '')
    document.querySelector('.guesses').innerHTML = ''
    document.querySelector('.lastResult').innerHTML = 10
    sumbit.value = 'Start A New Game'
    sumbit.addEventListener('click', function (e) {
        e.preventDefault()

        input.removeAttribute('disabled')



        pending_guess = 10
        record_guess = []
        document.querySelector('.guesses').innerHTML = record_guess

        // let input = document.querySelector('#guessField')





        let sumbit = document.querySelector('#subt')
        random_number = 70

        play_game = true

    })
}

// //re-start the game
// function start_game() {
//     play_game = true
//     input.removeAttribute('disabled')
//     document.querySelector('.guesses').innerHTML = ''
//     document.querySelector('.lastResult').innerHTML = 10
// }
// play_game = true
