const accountId = 654
let accountEmail = "example@example.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId =2  not allowed
accountEmail = "example.exampel@example.cm"
accountCity = "delhi"
accountPassword = "33454"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountCity);
// console.log(accountPassword);

console.table([accountId, accountCity, accountEmail, accountPassword])


// We should not use "var" 
// Because of issue in block scope and functional scope