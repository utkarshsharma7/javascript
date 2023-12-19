const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "somename"
tinderUser.isLoggedIn = false



// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname : "Utkarsh",
            lastname: "Sharma"
        }
    }
}


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2}   // optimal way to combine two or more objects (just spread them and combine)


// console.log(regularUser.fullname.userFullName);
// console.log(regularUser);

// console.log(obj3);


// const users = [
//     {},
//     {},
//     {,}
// ]



// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   // getting all the keys in an object
// console.log(Object.values(tinderUser));   // getting all the values of an object
// console.log(Object.entries(tinderUser)); // getting all the values of the object ['keys' , values]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // gives whether an object has this property or not




// ++++++++++++++++++++++++++++++++++++++DESTRUCTURING OBJECTS++++++++++++++++++++++++++++++++++


const course = {
    courseName: "js",
    price: '999',
    courseInstructor: "Utkarsh"
}

const {courseInstructor : Instructor} = course

console.log(Instructor);


// ++++++++++++++----------------JSON----------------++++++++++++++++++++++

// {
//     "name": "utkarsh",
//     "courseName": "JS HINDI",
//     "price": "999"
// }
