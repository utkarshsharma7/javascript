
if(1){
let a = 10;
const b = 20;
var c = 30; // var scope is available everywhere also the space where it is sed outside is scope which should not be done that's why we avoid using var to declare variables to maintain scopes value of the variables


}
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "example"

    function two(){
       const  website = "youtube"
       console.log(username);
    }

    // console.log(website);
    two()
}

one()





// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //function declaration is taken above by javascript when function call is mentioned before function declartion that concept is termed as hoisting 

function addone(num){
    return num + 1
}



addTwo(5)


const addTwo = function(num){   //function is declared but stored in a variable that's why it will give an error (it does not comes under the concept of hoisting)
    return num + 2
}