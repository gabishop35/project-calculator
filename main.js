let answer = document.querySelector(".answer-bar")
let buttons = document.querySelectorAll(".button1")
let clear = document.querySelector('.clear')
let equals = document.querySelector(".equals")


// let seven = document.querySelector('.seven')
// seven.addEventListener('click', function () {
//     let newEl = document.createElement("div")
//     let text = document.createTextNode("7")
//     newEl.appendChild(text)
//     answer.appendChild(newEl)
// })


for (let button of buttons) {
button.addEventListener("click", function() {
    let newEl = document.createElement("div")
    let text = document.createTextNode(button.innerText)
    newEl.appendChild(text)
    answer.appendChild(newEl)
})
}


clear.addEventListener('click', function () {
    answer.innerText = ''
})


equals.addEventListener("click", function() {
    let result = eval(answer.innerText)
    answer.innerText = result
})






// let eight = document.querySelector('.eight')
// eight.addEventListener('click', function () {
  
// })


// let nine = document.querySelector('.nine')
// nine.addEventListener('click', function () {
  
// })


// let four = document.querySelector('.four')
// four.addEventListener('click', function () {

// })


// let five = document.querySelector('.five')
// five.addEventListener('click', function () {
   
// })


// let six = document.querySelector('.six')
// six.addEventListener('click', function () {

// })


// let one = document.querySelector('.one')
// one.addEventListener('click', function () {

// })


// let two = document.querySelector('.two')
// two.addEventListener('click', function () {
 
// })


// let three = document.querySelector('.three')
// three.addEventListener('click', function () {

// })


// let zero = document.querySelector('.zero')
// zero.addEventListener('click', function () {

// })





// let plus = document.querySelector('.plus')
// four.addEventListener('click', function () {

// })


// let minus = document.querySelector('.minus')
// four.addEventListener('click', function () {

// })


// let multiply = document.querySelector('.multiply')
// four.addEventListener('click', function () {

// })

// let divide = document.querySelector('.divide')
// four.addEventListener('click', function () {

// })


// let equals = document.querySelector('.equals')
// four.addEventListener('click', function () {

// })






