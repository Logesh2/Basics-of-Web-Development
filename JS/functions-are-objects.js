//function are objects in js
// They are an object of a class called function
//Function class inherits from object class
function foo(){
    console.log('Iam foo');
}

console.log(foo instanceof Function);
console.log(foo instanceof Object);

foo.age=32; //can add properties since it is an object

console.log(foo);
console.log(foo());
console.log(foo.toString());//print the enire code of the function
console.log(foo.age); //32