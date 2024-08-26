const clock = document.querySelector('#clock')

// const current_time = new Date().toLocaleTimeString
// console.log(new Date().toLocaleTimeString());

// setInterval(function (time) {
//     console.log(new Date().toLocaleTimeString());
// }, 1000)


setInterval(function () {
    const date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)