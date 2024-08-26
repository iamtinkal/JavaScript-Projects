const buttons = document.querySelectorAll('.button')
// console.log(buttons[0].innerText);
const body = document.querySelector('body')


document.addEventListener('click', function (e) {
    if (e.target.id == 'Red') {
        body.style.backgroundColor = e.target.id
    }
    if (e.target.id == 'Blue') {
        body.style.backgroundColor = e.target.id
    }
    if (e.target.id == 'Green') {
        body.style.backgroundColor = e.target.id
    }
    if (e.target.id == 'Yellow') {
        body.style.backgroundColor = e.target.id
    }
    if (e.target.id == 'Reset') {
        body.style.backgroundColor = 'white'
    }
    // console.log(e.target);
    
})