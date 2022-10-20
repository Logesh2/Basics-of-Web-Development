
let quantity=100;
console.log(typeof quantity);

quantity="Hundred"; //number
console.log(typeof quantity); //string

//GOOD PRACTICE: Prefer const. if u have to reassign use left.
const pi=3.14;
let q=5;
//Cannot assign to const variables
//pi++ //pi=pi+1// uncomment for error

q++;
console.log(q);
