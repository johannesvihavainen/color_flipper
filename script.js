var body = document.body;
var button = document.querySelector('.btn');
var heading = document.querySelector('.heading');

button.addEventListener('click', function () {
    setRandomColor();
})

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    body.style.backgroundColor = generateRandomColor();
    var colorValue = getComputedStyle(body).getPropertyValue("background-color");
    heading.innerHTML = `Background Color : ${colorValue}`;
}


