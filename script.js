let quotes = [
    "Believe in yourself and all that you are.",
    "Success is not final; failure is not fatal.",
    "Dream big and dare to fail.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Every moment is a fresh beginning.",
    "Don’t stop when you’re tired, stop when you’re done.",
    "The best way to predict the future is to create it.",
    "Do something today that your future self will thank you for.",
    "Small steps every day lead to big results.",
    "Doubt kills more dreams than failure ever will.",
    "Stay positive, work hard, make it happen.",
    "Great things never come from comfort zones.",
    "If you can believe it, you can do it.",
    "Push yourself because no one else is going to do it for you.",
    "Discipline is doing what needs to be done even if you don’t want to.",
    "Failure is the opportunity to begin again more intelligently.",
    "Focus on the step in front of you, not the whole staircase.",
    "Success is the sum of small efforts repeated day in and day out.",
    "You don’t get what you wish for; you get what you work for.",
    "Start where you are, use what you have, do what you can."
];

let btn = document.querySelector('#btn');
let main = document.querySelector('main');
btn.addEventListener('click', function () {
    let h1 = document.createElement('h1');
    let y = Math.floor(Math.random() * 80)
    let x = Math.floor(Math.random() * 80)
    let rotate = Math.floor(Math.random() * 360)
        let sc = Math.floor(Math.random() * 4)
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let random = Math.floor(Math.random() * quotes.length)

    h1.innerHTML = quotes[random];
    h1.style.position = "absolute";
    h1.style.left = y + "%";
    h1.style.top = x + "%";
    h1.style.rotate = rotate + "deg"
    h1.style.color = `rgb(${r},${g},${b})`
    h1.style.scale = `scale`+sc
        main.appendChild(h1)



})