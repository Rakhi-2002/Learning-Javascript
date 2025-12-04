//----------------- Learning about iterations (or Loops) -----------------------------------

//------------------- Printing table from 1 to 10 --------------------
for(let i=1; i<=10; i++){
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
    }
}

//--------------------------- About Break and Continue keywords --------------------------

for (let i = 1; i <= 10; i++) {
    
    if(i == 5){
        console.log(`5 value detected`);
        break;  //when i == 5, break will bring control out of this loop
    }
    if(i == 4){
        continue;   //when i == 4, this iteration will get skipped
    }
    console.log(`i value ${i}`);
}

//----------------- while loop ---------------------

let index = 0;
while (index <= 5) {
    console.log(`Value of index is ${index}`);
    index += 2;
}

//---------------------------- do-while loop ----------------------------

let val = 10
do {
    console.log(`Value of ${val}`);
} while (val < 10);

//--------------------------------- for of and for each loop -------------------------------

let arr = [1, 2, 3, 4, 5, 6]

for (a of arr){
    console.log(a);
}

//---------------------------- About Map in JS ---------------------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
/**
 * Output for above
 * Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
 */
for(const key of map){
    console.log(key);   //prints in array format (e.g, ['IN', 'India'], [...]...etc)
}

for(const [key, value] of map){
    console.log(key, ':', value);
}
/**
 * Output for above
 * IN : India
 * USA : United States of America
 * Fr : France
 */

//------------------------------------------- About Objects in JS ----------------------
const object = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for(const [key, value] of object){
//     console.log(key, ':', value);
// }
//Note: above syntax gives error as object can't be iterated through this way

