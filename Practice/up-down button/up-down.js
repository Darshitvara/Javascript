
// Up-down buttons

let counter = 0;

document.getElementById("btn1").onclick = function() {
    counter++;
    document.getElementById("number").innerHTML = String(counter);
}

document.getElementById("btn2").onclick = function() {
    counter = 0;
    document.getElementById("number").innerHTML = String(counter);
}

document.getElementById("btn3").onclick = function() {
    counter--;
    document.getElementById("number").innerHTML = String(counter);
}

