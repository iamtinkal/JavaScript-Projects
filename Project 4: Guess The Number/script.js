let random_number = parseInt(Math.random() * 100 + 1)

// random_number = 70
// const input = document.querySelector('#guessField').value

record_guess = []

let input = document.querySelector('#guessField')


let sumbit = document.querySelector('#subt')
const p = document.createElement('p');
const startOver = document.querySelector('.resultParas');

pending_guess = 10

play_game = true


if (play_game) {

    sumbit.addEventListener('click', function (e) {
        e.preventDefault();

        if (input.value <= 0 || input.value > 100 || isNaN(input.value)) {
            alert("Enter Valid Number")
        }
        else {
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
                    alert(`Correct Number is:${random_number}`)
                    endGame()
                }
            }


        }
    })
}






// //end game
function endGame() {
    play_game = false
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    document.querySelector(".lowOrHi").innerHTML = ''

    new_game();
}


function new_game() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        random_number = parseInt(Math.random() * 100 + 1);
        document.querySelector('.guesses').innerHTML = '';

        input.value = ''
        document.querySelector('.lastResult').innerHTML = 10;
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        record_guess = []
        pending_guess = 10
        document.querySelector(".lowOrHi").innerHTML = ''
        play_game = true;

    });
}
