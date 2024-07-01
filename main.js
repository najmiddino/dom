let text = document.querySelector('.random-Num')
let body = document.querySelector('body')
let randomNum = Math.floor(Math.random()* 100)

text.innerHTML = randomNum

body.style.background = 'black'
text.style.color = 'red'
text.style.textAlign = 'center'
text.style.marginTop = '350px'
text.style.fontSize = '40px'