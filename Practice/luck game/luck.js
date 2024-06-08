
let number = Math.ceil(((Math.random() * 100)));
// let number = 20;
let guessedNo = 0;
let counter = 0;
document.getElementById("resetbtn").onclick = function(){
    guessedNo = 0;
    counter = 0;
    number =  Math.ceil(((Math.random() * 100)));
    document.getElementById("dicespace1").innerHTML = String(guessedNo);
    document.getElementById("dicespace2").innerHTML = String("?");
    document.getElementById("guessedNo").value = null
    document.getElementById("msg").innerHTML = "Guess It..."
}
document.getElementById("btn").onclick = function(){
    guessedNo = Number(document.getElementById("guessedNo").value) ;
    document.getElementById("dicespace1").innerHTML = String(guessedNo);
    counter++;
    if(guessedNo == number){
        document.getElementById("msg").innerHTML = "Congratulations..."+ " Guessed in " + String(counter) + " attempts.."
        document.getElementById("dicespace2").innerHTML = String(guessedNo);
    }
    else if(guessedNo < number){
        document.getElementById("msg").innerHTML = "Try again darling..go higher.."
    }
    else{
        document.getElementById("msg").innerHTML = "Try again darling..go lower.."
    }
}






