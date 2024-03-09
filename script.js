// base = document.getElementById("first")
// base = "Pakistan is not my Homeland."
// alert("Hello world");


// console.log(prompt("write"))
// let a = 34;
// // console.log(a + 34);
// let myObject = {
//     ali : "Nickname",
//     huzaifa : "Name"
// };

// let number = prompt("write a number to find if it is an even or an odd number");
// console.log(number);
// let number = Math.floor(Math.random() * 100);

// for(let n = 1; n <=10; n++){
//     console.log(number, "*", n , "=", number * n);
// }
// if (number % 2 === 0){
//     console.log("The number ", number, " is Even.");
// }
// else{
//     console.log("The number", number, "is Odd.");

// }







// myObject.Saran = "LastName";
// console.log(myObject)
// myObject.ali = "Nick_name";
// delete myObject.Saran
// console.log(myObject)


let randomNumber = Math.random();

function calcultor(){
    let num1  = prompt("Enter First number");
    let num2  = prompt("Enter Second number");
    let op = prompt("Enter operation");
    let randomNumber = Math.random();

    if(randomNumber > 0.1){   // 10% chances of error 😉  
    if(op == "+"){
        console.log(num1 + num2);
    }
    else if(op == "-"){
        console.log(num1 + num2);
    }
    else if(op == "*"){
        console.log(num1 + num2);
    }
    else{
        console.log(num1 ** num2);
    }
    }
    else{
        if(op == "+"){
        console.log(num1 - num2);
    }
    else if(op == "*"){
        console.log(num1 + num2);
    }
    else if(op == "-"){
        console.log(num1 / num2);
    }
    else{
        console.log(num1 ** num2);
    }
    }
}
calcultor();

