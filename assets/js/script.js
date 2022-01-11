var currentNumberHtml = document.getElementById("count-value");
var currentNumber = 0;

function increase() {
    currentNumber++;
    if (currentNumber > 10)
        currentNumber = 10;
    currentNumberHtml.innerHTML = currentNumber;
}

function decrease() {
    currentNumber--;
    if (currentNumber < 0)
        currentNumber = 0;
    currentNumberHtml.innerHTML = currentNumber;
}

function alerta() {
    if (currentNumber <= 5)
        alert("Que pena, mas fico contente com seu feedback!");
    else
        alert("Que bom que gostou, agradeço o seu feedback!");
    currentNumber = 1;
    currentNumberHtml.innerHTML = currentNumber;
}