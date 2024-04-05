const accountId = 144553
let accountEmail = "pandeysid@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "2131"
accountCity = "Banglore"

console.log(accountId);

/*
Prefere not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])