//************** Scope and hosting ********************** */

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
    var x = 1;
}
console.log(x);

