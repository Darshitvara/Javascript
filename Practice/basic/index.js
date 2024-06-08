console.log("Hello Universe !");

// way = 1 to take user input 
// window.alert("Thank you!");


let name = window.prompt("Enter your name: ");
document.getElementById("p1").innerHTML = "Hello My name is " + name;

// way = 2 to take user input 


// document.getElementById("btn1").onclick = function(){
//     name = document.getElementById("p2").value;
//     document.getElementById("p1").innerHTML = "Hello " + name;
// }






// Switch statement in js

let grade = 'A'

switch('A'){
    case 'A':
        console.log("Passed with Distinction")
        break
    case 'B':
        console.log("Passed with excellent marks")
        break
    case 'C':
        console.log("Passed with average marks")
        break
    case 'D':
        console.log("Passed with good marks")
        break
    case 'E':
        console.log("Passed with low marks")
        break
    case 'F':
        console.log("You are Fail.")
        break
    default:
        console.log("Please enter valid grade..")
}

// Switch case with different use case
// works as a nested if statement with more convience


let marks = 90

switch(true){
    case (90 <= marks && marks <= 100):
        console.log("Passed with Distinction")
        break
    case (80 <= marks):
        console.log("Passed with excellent marks")
        break
    case (60 <= marks):
        console.log("Passed with average marks")
        break
    case (50 <= marks):
        console.log("Passed with good marks")
        break
    case (40 <= marks):
        console.log("Passed with low marks")
        break
    case (40 > marks && marks >= 0):
        console.log("You are Fail.")
        break
    default:
        console.log("Please enter valid marks..")
}








