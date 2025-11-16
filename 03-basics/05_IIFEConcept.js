//--------------- Immediately Invoked Function Expression--------
// For e.g, file which includes only Database connections. Whenever the application starts, In that case we need to run/execute immediately the above DB connection file 
//Also IIFE is used to avoid problems which might by created by Global scoped variables

//below is also called as named IIFE(as its have a name - dbConnections)
(function dbConnections(){
    console.log(`DB CONNECTED`);
})();   //---> here, for IIFE, ;(semicolon) is used to end the IIFE

//---- IIFE in terms of arrow function (unnamed IIFE)
((name) => {
    console.log(`DB CONNECTED BY ${name}`);
})('Rakhi');