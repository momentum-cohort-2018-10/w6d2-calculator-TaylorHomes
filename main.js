document.getElementById('seven').addEventListener('click', function () {
    document.getElementById('display').innerText += '7'
})

document.getElementById('eight').addEventListener('click', function () {
    document.getElementById('display').innerText += '8'
})

document.getElementById('nine').addEventListener('click', function () {
    document.getElementById('display').innerText += '9'
})

document.getElementById('four').addEventListener('click', function () {
    document.getElementById('display').innerText += '4'
})

document.getElementById('five').addEventListener('click', function () {
    document.getElementById('display').innerText += '5'
})

document.getElementById('six').addEventListener('click', function () {
    document.getElementById('display').innerText += '6'
})

document.getElementById('one').addEventListener('click', function () {
    document.getElementById('display').innerText += '1'
})

document.getElementById('two').addEventListener('click', function () {
    document.getElementById('display').innerText += '2'
})

document.getElementById('three').addEventListener('click', function () {
    document.getElementById('display').innerText += '3'
})

document.getElementById('zero').addEventListener('click', function () {
    document.getElementById('display').innerText += '0'
})

document.getElementById('decimal').addEventListener('click', function () {
    document.getElementById('display').innerText += '.'
})

document.getElementById('plus').addEventListener('click', function () {
    document.getElementById('display').innerText += '+'
})

document.getElementById('minus').addEventListener('click', function () {
    document.getElementById('display').innerText += '-'
})

document.getElementById('multiply').addEventListener('click', function () {
    document.getElementById('display').innerText += '*'
})

document.getElementById('divide').addEventListener('click', function () {
    document.getElementById('display').innerText += '%'
})

document.getElementById('clear').addEventListener('click', function () {
    display = "";
    document.getElementById('display').innerText = display
})


function equal() {
    document.getElementById('display').innerText = eval(document.getElementById('display').innerText)
}




