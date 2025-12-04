//------------------------------------------- About Objects in JS ----------------------
const object = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for(const [key, value] of object){
//     console.log(key, ':', value);
// }
//Note: above syntax gives error as object can't be iterated through this way


const obj2 = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

/**
 * for in loop is used to iterate over objects.
 * for in loop returns index of each value when used to iterate over an array. 
 */
for(const key in obj2){
    console.log(`${key} shortcut is for ${obj2[key]}`);
}

const programmingLang = ["Js", "cpp", "py", "Java", "rb", "c"]

for(const key in programmingLang){
    console.log(key);   //here keys are 0,1,2,3.... (index of each value)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);

for(const key in map){
    console.log(key);   
}