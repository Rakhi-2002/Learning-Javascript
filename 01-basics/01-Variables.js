const accId = 123456
let accEmail = "rakhi@cgi.com"
var accPasswd = "23456"
accCity = "Nashik" 
let accState;
// accId = 12   //const variables cannot be changed further
accEmail = "rani@cgin.com"
accPasswd = "123"
accCity = "Bengaluru"

console.log(accId);

/*
Prefer not to use var
Because of its issues in Block Scope and Functional Scope

*/
console.table([accId, accEmail, accPasswd, accCity, accState])