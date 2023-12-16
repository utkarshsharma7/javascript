let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getTime());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023,11,16)
// let myCreateDate = new Date(2023,11,16,5,3)
let myCreateDate = new Date("12-16-23")

// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myTimeStamp.toLocaleString());

// console.log(Math.floor(Date.now()/1000));


let newDate =new Date()
console.log(newDate);

// console.log(newDate.toLocaleString());

newDate.toLocaleString('default' , {
    weekday: "long",
    timeZone: ""

})