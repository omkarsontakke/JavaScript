//************** Scope and hosting ********************** */
// var
// Declares a variable, optionally initializing it to a value.

// let
// Declares a block-scoped, local variable, optionally initializing it to a value.

// const
// Declares a block-scoped, read-only named constant.

function one() {
    let username = "Omkar";
    function two() {
        let website = "Namaste";
        // console.log(username,website);
    }
    // console.log(username);
    two()
}
one()

// name = "Namo";
// let name;
// console.log(name); //reference error

// user = "Namo";
// const user;
// console.log(user); //Must be declare error
let y = null;
// console.log(typeof y);

if(true) {
     y = 1;
}
console.log(y);// 1

