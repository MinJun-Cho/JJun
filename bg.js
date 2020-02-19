var body = document.querySelector("body");


var IMG_NUMBER = 3;


function paintImage(imgNumber) {
    var image = new Image();
    image.src = `image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}


function genRandom() {
    var number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

function init () {
    var randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
