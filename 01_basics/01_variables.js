const accountId = 1445533
let accountEmail = "lakshay@gmail.com"
var accountPassword = "123465"
accountCity = "Delhi"
let accountState;

// accountId = 3 // Not allowed

console.log(accountId);
accountEmail = "hfdbhjksdbj@gmail.com"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountCity, accountState])

/*
Prefer not to use var
Because of issue in block scope and functional scope
{}--> these are called scope 
*/