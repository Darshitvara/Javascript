console.log("Hello Universe !");

// way = 1 to take user input 
// window.alert("Thank you!");


let name = window.prompt("Enter your name: ");
document.getElementById("p1").innerHTML = "Hello My name is " + name;

// way = 2 to take user input 


document.getElementById("btn1").onclick = function(){
    name = document.getElementById("p2").value;
    document.getElementById("p1").innerHTML = "Hello " + name;
}











