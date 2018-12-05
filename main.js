function click1(event) {
    let thing = document.getElementsByClass("calculator_keys")
    let display = document.getElementsByClass("calculator_display")
    let newDisplay = document.createElement('keys')
    thing.onclick = function () {
        newDisplay.innerText = "1"
        display.appendChild(newDisplay)
    }
}
click1()



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let buttons = document.getElementsByClassName('num');
// for (let button of buttons) {
//     button.addEventListener("click", clickHandler);

// document.getElementById("seven").addEventListener("click", myFunction);

// var seven = document.getElementsByClassName("num");
// seven.addEventListener("click", myFunction);

// function myFunction() {
//     console.log("hello world");
// }


// var element = document.getElementById(id);

// function printSomething(number) {
//     var elem = document.getElementById('seven');
//     print = var elem

// }


// var buttons = document.getElementsByClassName("num");
// for (let button in buttons) (











// document.getElementById("num").addEventListender("click", function () {
//     document.getElementById("seven").innerHTML = "7";

// });



// Var calculator = document.getElementById(“display”);
// function clickCalcButton(el) {
//     calculator.innerHTML += el.innerHTML;
// }
// function clickEqualsButton() {
//     calculator.innerHTML += eval(calculator.innerHTML);
// }

