let button = document.querySelector('.answer')
let input = document.querySelector('.block')
let label = document.querySelector('.Temperature')

button.addEventListener('click',()=>{
    label.innerText = 'Temperature °F:' + (eval(`(${input.value}*9/5)+32`)).toFixed(1)
})