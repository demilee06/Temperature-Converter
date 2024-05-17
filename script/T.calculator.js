let button = document.querySelector('.answer')
let input = document.querySelectorAll('.total')

button.addEventListener('click',()=>{
    input.value = eval(`${input1.value}/${input2.value}*100^2`)
})