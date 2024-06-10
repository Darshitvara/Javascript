console.log("Hello Universe !");

// way = 1 to take user input 
// ==========================

// window.alert("Thank you!");


// let name = window.prompt("Enter your name: ");
// document.getElementById("p1").innerHTML = "Hello My name is " + name;

// ===================================================================================================================

// way = 2 to take user input 
// ==========================


// document.getElementById("btn1").onclick = function(){
    //     name = document.getElementById("p2").value;
    //     document.getElementById("p1").innerHTML = "Hello " + name;
    // }
    
    
    
// ===================================================================================================================
// Switch statement in js
// ======================
    
        // let grade = 'A'
        
        // switch('A'){
        //     case 'A':
        //             console.log("Passed with Distinction")
        //             break
        //     case 'B':
        //             console.log("Passed with excellent marks")
        //             break
        //     case 'C':
        //             console.log("Passed with average marks")
        //             break
        //     case 'D':
        //             console.log("Passed with good marks")
        //             break
        //     case 'E':
        //             console.log("Passed with low marks")
        //             break
        //     case 'F':
        //             console.log("You are Fail.")
        //             break
        //     default:
        //             console.log("Please enter valid grade..")
        // }
                                
// ===================================================================================================================                      
// Switch case with different use case
// ===================================
// works as a nested if statement with more convience
// ==================================================
                                
        // let marks = 90
                                
        // switch(true){
        //     case (90 <= marks && marks <= 100):
        //         console.log("Passed with Distinction")
        //         break
        //     case (80 <= marks):
        //         console.log("Passed with excellent marks")
        //         break
        //     case (60 <= marks):
        //         console.log("Passed with average marks")
        //         break
        //     case (50 <= marks):
        //             console.log("Passed with good marks")
        //             break
        //     case (40 <= marks):
        //             console.log("Passed with low marks")
        //                 break
        //     case (40 > marks && marks >= 0):
        //                 console.log("You are Fail.")
        //                 break
        //     default:
        //         console.log("Please enter valid marks..")
        // }
        
// Loops in javascript
// ===================
        
        // let username = ""
        
        // while(username == ""){
        //     username = window.prompt("Enter Your Name : ")
        // }
        // document.getElementById("p1").innerHTML = "Hello My name is " + username;
        
 // ===================================================================================================================
        
        // let username = ""
        
        // do{
            //     username = window.prompt("Enter Your Name : ")
            // }while(username == "")
                // document.getElementById("p1").innerHTML = "Hello My name is " + username;
            
//  ===================================================================================================================
        // while(1){
            //     console.log("Infinite loop")
            // }
    
//  ===================================================================================================================

        // row = window.prompt("Enter Number of rows for triangle : ")
        // col = window.prompt("Enter Number of Column for triangle : ")
        // for(let i = 0 ; i < row ; i+=1){
        //     for(let j = 0 ; j <= col ; j+=1){
        //         document.getElementById("table").innerHTML += ((j+1)+(" ")); 
        //     }
        //     document.getElementById("table").innerHTML += "<br><br>"; 
        // }

//  ===================================================================================================================


// nested loop for triangle

        // for(let i = 0 ; i < row ; i+=1){
        //     for(let j = 0 ; j <= i ; j+=1){
        //         document.getElementById("table1").innerHTML += ("   *   "); 
        //     }
        //     document.getElementById("table1").innerHTML += "<br><br>"; 
        // }
        // for(let i = row ; i >= 0 ; i-=1){
        //     for(let j = 0 ; j <= i ; j+=1){
        //         document.getElementById("table1").innerHTML += ("   *   "); 
        //     }
        //     document.getElementById("table1").innerHTML += "<br><br>"; 
        // }
        

// ===================================================================================================================
        
        
// Functions in Javascript
// =======================

        // function for prime number
        // ========================

        // function isPrime(num){
        //     if(num<=1) return "not prime"
        //     if(num <= 3) return "prime"
        //     let limit = Math.sqrt(num)
        //     for(let i = 2 ; i <= limit ; i++){
        //         if(num % i === 0){
        //             return i + "Not prime"
        //         }
        //     }
        //     return "prime"
        // }
        
        // let n = window.prompt("Enter Number : ")
        // document.getElementById("p1").innerHTML =  ` ${n} is ` + isPrime(n)
        


        // function for odd/even number
        // ========================
        
        // function isEven(num){
        //     if(num & 1){
        //         return false
        //     }
        //     return true
        // }

        // let n = window.prompt("Enter Number : ")
        // document.getElementById("p1").innerHTML = n +" is " + (isEven(n) ? "Even" : "odd")        
        
        
// different string representations using toLocalString function
// =============================================================
// returns the language sensitive representation of number 
// =======================================================

        // let num = 39894802.4843

        // console.log(num.toLocaleString(undefined,{style:"currency" ,currency:"INR"}))
        // console.log(num.toLocaleString(undefined,{style:"percent"}))
        // console.log(num.toLocaleString(undefined,{style:"unit" ,unit:"celsius"}))
        // console.log(num.toLocaleString(undefined,{style:"unit" ,unit:"mile"}))

// spread operator (...)
// =====================

// allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (Unpacks the elements)
// =======================================================================================================================================

        // let numbers = [1,0,20,31,45,6,46,55,26,55,3264,3]
        // console.log(numbers)
        // console.log(...numbers)

        // let names = ["Jay","Harsh","Sumit","Rishabh"]
        // let cars = ["Ciron","virtus","Fortuner","Porche"]
        // console.log(names)
        // console.log(...names)

        // names.push(cars)
        // console.log(names)

        // names.push(...cars)
        // console.log(names)

// rest parameter(...)
// ====================

// represents an indefinite number of parameters(packs arguments into an array)
// ============================================================================


        // function total(...numbers){
        //         let total = 0
        //         for(let num of numbers){
        //                 total += num
        //         }
        //         return total
        // }
        // console.log(total(10,40,49,20))
        // console.log(total(49,20))
        // console.log(total(49,20,44,20,49,20,53,10,57))

// callback = a function passed as an argument to another function
// ===============================================================

// Ensures that a function is not going
// to run before a task is completed
// helps us develop asynchronous code that helps us avoid errors and potential problems
// EX. In file type converted program wait for a file to load then continues the further execution
// ===============================================================================================

        // function sum(a,b ,display){
        //         let total = a+b
        //         display(total)
        // }
        // function display(something){ 
        //         console.log(something)
        // }

        // sum(10,15,display)

// array.forEach() = executes a provided callback function once for each array element
// ===================================================================================

// element , index and array will be always provided by the forEach function so we don't necessarily need to declare it..
// ======================================================================================================================
        
        // let names = ["jay","harsh","darshit","rishabh"]
        // names.forEach(capitalize)
        // names.forEach(print)

        // function capitalize(element,index,array){
        //         array[index] = element.toUpperCase() 
        // }
        
        // function print(element){
        //         console.log(element)
        // }

// array.map() = executes a provided callback function once for each array element and creates a new array
// =======================================================================================================
// works similar as a forEach mathod 
// =================================

        // let nums = [1,2,3,4,5,6,7]
        // let cubes = nums.map(cube)
        // cubes.forEach(print)  
        // console.log(...cubes)
        // function cube(element){
        //         return Math.pow(element,3)
        // }
        // function print(element){
        //         console.log(element)
        // }

 
// array.filter() = creates a  new array with all elements that pass the test provided by a function
// =================================================================================================

        // let ages = [15,48,53,12,74,7,49]
        // let adults = ages.filter(checkAge)

        // console.log(...adults)

        // function checkAge(element){
        //         return element >= 18
        // }


// array.reduce() = reduces an array to a single value
// ===================================================

        // let ages = [15,48,53,12, 74,7,49]
        // let adults = ages.reduce(checkAge)

        // console.log(adults)

        // function checkAge(total,element){
        //         return element+ total
        // }

// array.sort() = by default sorts an array based on string and for numeric sorting we need to provide function that has two parameters and returns positive on greater value , zero in equal and negetive on less value.
// ======================================================================================================================================================================================================================

        // let ages = [15,48,53,12, 74,7,49]
        // // let adults = ages.sort((a,b) => a-b)
        
        // ages = ages.sort(compare)

        // function compare(a,b){
        //         return a-b
        // }
        // console.log(...ages)

// arrow function(=>) = compact alternative to a traditional function
// ==================================================================

        // let ages = [15,53,12, 74,7,49]
        // let squared = ages.map((element) => element*element);

        // let squared = ages.map((a) => Math.pow(a,2) );

        // ages.forEach(function(element){
        //         return Math.pow(element,2)
        // });

        // squared.forEach((element) => console.log(element))
        

// program to suffle the cards
// ===========================

        // let  cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

        // let shuffeldCards = shuffle(cards)
        // console.log(...shuffeldCards)
        // console.log(cards)
        // console.log(...cards)

        // function shuffle(array){
        //         let length = array.length
        //         let current_index = length
        //         let temp = 0

        //         while(current_index != 0){
        //                 random_index = Math.floor(Math.random() * length)
        //                 current_index-=1;
        //                 temp = array[current_index]
        //                 array[current_index] = array[random_index]
        //                 array[random_index] = temp
        //         }
        //         return array
        // }


