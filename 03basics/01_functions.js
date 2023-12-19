function sayMyName(){
    console.log("U");
    console.log("T");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName()


//  only for printing 
// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }



// Code for returning valu
function addTwoNumbers(number1, number2){
   return (number1 + number2);
}


const result = addTwoNumbers(4,5)

// console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("utkarsh")); 



console.log(loginUserMessage());  // when we dont give any argument in the function it just returns undefined 