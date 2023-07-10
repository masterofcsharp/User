let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

let user = { // an object
  name: "John",
  age: 30, // by key name store value "John"
  age: 30 // by key "age" store value 30
};

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;

delete user.age;

let user = {
  name: "John",
  age: 30,
  "likes birds": true; // multiword property name must be quoted
};

let user = {
  name: "John",
  age: 30,
}


// this would give a syntax error
user.likes birds = true

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;




