

// Program to find the hypotenus of right angle triangle 

document.getElementById("btn").onclick = function() {
    let val1 = Number(document.getElementById("input1").value);
    let val2 = Number(document.getElementById("input2").value);

    let answer = Math.sqrt(Math.pow(val1,2) + Math.pow(val2,2));

    document.getElementById("showAnswerHere").innerHTML = "Hypotenus of triangle : " +String(answer);

}