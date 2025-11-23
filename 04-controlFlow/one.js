//----------------------- Control Flow ------------------------
//What code to run and what to not, it will be decide through control flow

//------------- Operators ---------------------

//1. Comparison operators: <, >, <=, >=, ==, !=, ===, !== 
//2. Logical Operators: &&, ||, !
const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log('User logged in');
}

const score = 200
//below is conditional scope(if block)
if(score > 100){
    let power = "fly"   // let variables can't be accessed outside of this block scope
    console.log(`User power: ${power}`);
}
// console.log(power);  //gives error: power is undefined(its defined inside above if so can't be accessed)

//----------- Nesting if-else if-else block ------------------
const value = 1000

if(value < 500){
    console.log('In if block');    
}
else if(value < 750){
    console.log('In first else-if');
}
else if(value < 900){
    console.log('In second else-if');
}
else {
    console.log('In else block');
}

//------------------------- Switch Case ------------------------
//switch is similar to if-elseif blocks
//It is used to run multiple cases which matches the given condition. Syntax below

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "March"

switch (month) {
    case "Jan":
        console.log('January');
        break;
    case "Feb":
        console.log('February');
        break;
    case "March":
        console.log('March');
        break;
    case "April":
        console.log('April');
        break;

    default:
        console.log('None of the above');
        break;
}