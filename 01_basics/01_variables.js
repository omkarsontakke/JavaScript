const accountId = 79;
let accountEmail = "omkar@tesla.com";
var accountPassword = "143";
accountBranch = "Panvel";
let accountState;
/*
    Prefer not to use var
    Because of block scope and functional scope
*/

//accountId = 97; //NOT ALLOWED
//console.log(accountId);

// accountEmail = "omkar@tcs.com";
// console.log(accountEmail);

// accountPassword = "341";
// console.log(accountPassword);

// let accountBranch = "Mumbai";
// console.log(accountBranch);
console.table([accountId,accountEmail,accountPassword,accountBranch,accountState])
