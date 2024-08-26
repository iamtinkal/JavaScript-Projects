const form = document.querySelector('form')
const result  = document.querySelector('#results')

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    

    //check if wrong number enter by user
    if(height<=0|| height === '' || isNaN(height)){
        result.innerHTML = "Please Enter valid height"
    }
    else if(weight<=0|| weight === '' || isNaN(weight)){
        result.innerHTML = "Please Enter valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>BMI is: ${bmi}</span>`;
    }
})


document.querySelector('#reset').addEventListener('click', function(e){
    result.innerHTML = ''
})
