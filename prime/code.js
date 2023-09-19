var button = document.getElementById("button");
button.addEventListener("click", onclick, false);
var num = 1;


function onclick() {
    document.write("1 ")
    for (var i = 0; i < 5000; i++) {
        isPrime();
    }
    setInterval(oninterval, 0.5);
}

function oninterval() {
    for (var i = 0; i < 300; i++) {
        isPrime();
    }
}

function isPrime() {
    window.num += 1;
    var bool = true;
    for (var i = 2; i < (Math.floor(window.num / 2)) + 1; i++) {
        if (bool == true) {
            if (window.num % i === 0) {
                bool = false;
            }
        }
    }
    if (bool == true) {
        document.write(window.num, " ");
    }
}