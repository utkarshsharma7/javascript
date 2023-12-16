// ARRAY

const myArr = [0,1,2,3,4,5, true, 'utkarsh']
const myHeroes = ["shaktiman", "ironman"]

const myArr2 = new Array(1,2,3,4)

// console.table(myArr[7]);



// unshift -> entering a value in an array in its begining part
// shift -> removing first value of the array


// included() -> checks whether a value is present in aray or not



// const newArray = myArr.join()

// // join() converts array into a string and binds all of its element


// console.log(myArr);
// console.log(typeof newArray);

// slice and splice
// console.log(myArr);

console.log("A " , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B " , myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C " , myArr);


// Slice() - returns the values in given range but excluding right range also doesn't  effect the original array
// Splice() - returns the value including range also deletes the returned values from the original array