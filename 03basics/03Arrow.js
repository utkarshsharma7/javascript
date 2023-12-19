const user = {
    username: "utkarsh",
    price: 100000,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`); // this is a keyword which is used to select a variable declared in the any object
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sharma"
user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // returning implicitly without curly braces and return keyword

const addTwo = (num1, num2) => ({username: "hitesh"})    //if we need to return objects in arrow functions we need to put them in curly braces


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()