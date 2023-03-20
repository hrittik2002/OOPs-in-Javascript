// object
const obj = {
    name : "hrittik"
}
console.log(obj)
console.log(obj.__proto__) // Object
console.log(obj.__proto__.__proto__) // null
console.log(obj.prototype) // undefined

// constructor function
function objFactory(name){
    this.name = name;
}
console.log(objFactory.__proto__) // Function
console.log(objFactory.__proto__.__proto__) // Object
console.log(objFactory.__proto__.__proto__.__proto__) // null
console.log(objFactory.prototype) // Function
console.log(objFactory.prototype.__proto__) // Object
console.log(objFactory.prototype.__proto__.__proto__) // null



const obj2 = new objFactory("HG");
// console.log(obj2);
// console.log(obj2.__proto__); // Function
// console.log(obj2.__proto__.__proto__); // Object
// console.log(obj2.__proto__.__proto__.__proto__); // null
// console.log(obj2.prototype); // undefined