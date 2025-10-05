//Object Destructuring

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//Cases: when we need to access same key or value multiple/repeated times
const {courseInstructor: instructor} = course;
console.log(instructor);            //Output: Hitesh (ordinary way to access properties- object.key)

//----------------- About APIs -------------------------
//API response in JSON format
/* {
     "name": "hitesh",
     "coursename": "js in hindi",
     "price": "free"
   } */