const tinder = new Object() //singleton object
const tinder1 = {}

tinder1.id = "123@abc"
tinder1.name = "happy"
tinder1.isLoggedIn = false

console.log(tinder1)
console.log(JSON.stringify(tinder1, null, 4))   //helps to add indentation and line breaks while doing console.log(). Format: (objectname, replacer, space or whitespaces)

const newuser = {
    email: "rakhi123@gmail.com",
    fullname: {
        userfullnm: {
            firstname: "Rakhi",
            lastname: "Bhagwat"
        }
    }
}

console.log(newuser.fullname.userfullnm.firstname)  //output: Rakhi

//How to merge objects -- using assign() and spread operator(...objectname)
const object1 = {1: "A", 2: "B"}
const object2 = {3: "C", 4: "B"}
const object3 = {object1, object2}

console.log(object3)    //output: { object1: { '1': 'A', '2': 'B' }, object2: { '3': 'C', '4': 'B' } }

console.log(Object.assign({}, object1, object2))    //o/p: { '1': 'A', '2': 'B', '3': 'C', '4': 'B' }, {}: optional param. helps to merge more than 2 objects

console.log({...object1, ...object2})

//How we get data from Database -- in form of array of objects

const users = [
    {
        id: "1001",
        name: "demo1"
    },
    {
        id: "1002",
        name: "demo2"
    },
    {
        id: "1003",
        name: "demo3"
    },
    {
        id: "1004",
        name: "demo4"
    },
    {
        id: "1005",
        name: "demo5"
    },
]

console.log(users[0].id)
console.log(users[0].name)

console.log(Object.keys(tinder1));  //output: array of all keys in tinder1 object
console.log(Object.values(tinder1));    //output: array of all values in tinder1 Object
console.log(Object.entries(tinder1));   //output: array of tinder1 Object in this form: [[key1, object1], ... ,[keyn, objectn] ]

console.log(tinder1.hasOwnProperty('isLoggedIn'));   //output: checks if specified object has the mentioned property or not




