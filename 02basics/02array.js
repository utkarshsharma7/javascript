const marvel_heros = ["ironman", "spiderman", "Thor"]
const dc = ["batman","superman", "joker"]


// marvel_heros.push(dc)

// console.log(marvel_heros);

//  const comb =  marvel_heros.concat(dc)

// console.log(comb);

const all_heros = [...dc, ...marvel_heros]

console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity) // makes all subarray combined in an array

console.log(real_another_array); 

console.log(Array.isArray("utkarsh")) // checks whether the parameter is an array or not
console.log(Array.from("utkarsh")) // converts every element into an array
console.log(Array.from({name: "utkarsh"})); //interesting case returns empty array

let score1= 100
let score2 = 200
let score3 =300

console.log(Array.of(score1, score2, score3));