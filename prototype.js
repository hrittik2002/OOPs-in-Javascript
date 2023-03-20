// Prototype
/*** every object have prototype Object ***/
const obj = {
    name : "Hrittik"
}
//console.log(obj)

 /** creating our own prototype **/
 // e.g. 1
const obj1 = {
    name : "Hrittik"
}
const obj2 = {
    roll : 21,
    __proto__ : obj1
}
console.log(obj2.name) // Hrittik
// here obj1 is prototype of obj2 
// we can extract all the properties of obj1 from obj2
// How it works?
// At first browser will search for the propertie in obj1 then if it is not found it will go to the prototype of obj1
// if the property is not found in obj2 it will go to the prototype of obj1 i.e. Object ( Object is the root prototype)
// if still not found it will return undefined

// e.g. 2
const obj3 = {
    name : "Hrittik",
    getName : function () { 
        return this.name
    }
}
const obj4 = {
    name : "Pratik",
    roll : 5,
    __proto__ : obj3
}
console.log(obj4.getName()); // Pratik
// Here at first the browser will find the getName() method in obj4 then it will not find it
// it will go to its prototype obj3 then it will find the getName() method.
// it will call the getName() method, where it will get the property this.name
// then it will agian try to find the name property in obj4 
// it will find it and return "Pratik"

// e.g. 3 : Adding new property to already created prototype
const obj5 = {
    name : "Hrittik",
    getName : function () { 
        return this.name
    }
}
const obj6 = {
    name : "Pratik",
    roll : 5,
    __proto__ : obj5
}

console.log(obj6);

// e.g. 4 : Prototype of array object
const array = [1 , 2 , 3]
//console.log(array)
/**
 * Here array has prototype Array.
 * All the properties of array like array.length() array.fill() we get are actually from Array Prototype.
 * The prototype of Array is Object. Object is the ultimate prototype of every object in javascript.
 */
// creating our own methods of Array prototype
Array.prototype.show = function(){
    return this;
}
const arr1 = ["A" , "B" , "C" , "D" , "E" , "F"];
console.log(arr1);

// creating prototype second method
const obj7 = {
    name : "Hrittik",
    // getName : function () { 
    //     return this.name
    // }
}
const obj8 = {
    roll : 5,
    __proto__ : obj7
}
obj8.prototype = obj7; // we can add prototype in this method also after creating the objects
// adding methoods to prototype
obj8.prototype.getName = function () {
    return this.name;
}

console.log(obj8.getName()); 