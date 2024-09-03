



const HexChange = function () {
    colorRange = '0123456789ABCDEF'

    hex = '#'
    for (i = 0; i < 6; i++) {
        hex += colorRange[Math.floor(Math.random() * 16)]
    }
    // console.log(hex);

    return hex

}


let IntervalID
const changeColor = function () {
    if (!IntervalID) {
        IntervalID = setInterval(changeBGColor, 1500)
    }
    function changeBGColor() {
        document.querySelector("body").style.backgroundColor = HexChange()
    }

}

const stopColorChange = function () {
    clearInterval(IntervalID)
    IntervalID = null
}


document.querySelector("#start").addEventListener('click', changeColor)

document.querySelector("#stop").addEventListener('click', stopColorChange)





// setInterval(test1, 1000)



