//Singleton

// Object.create()
// When we declare literals no "singleton is formed"
// "Singleton" is only formed when we call constructor


 const mySym = Symbol("key1")   // symbol declaration


const jsUser = {
  name: "utkarsh",
  age: 18,
  location: "Agra",
  [mySym]: "key1", // symbol used in a object is used in saure brackets
  email: "ussharma7696@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};


// console.log(jsUser.email);   // calling objects in console
// console.log(jsUser["email"]);  // another way to call objects in console
// console.log(jsUser.mySym); 

jsUser.email = "example@example.com"  //updating email in object
// Object.freeze(jsUser)  // freezing values of objects so that they can't be changed further

jsUser.email = "exampleChange@example.com"

// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello world");
}

// console.log(jsUser.greeting);
// console.log(jsUser);





