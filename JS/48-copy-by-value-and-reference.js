const x=100;
let y=x; //value of x is copied to y
y++;// does not change x


console.log(x);//not affected
console.log(y);

const john={
    name:'john',
    age:32,
    address:{
        city:'Noida',
        pinCode:100100
    }
};


const jonathan=john;

jonathan.age++; //same as john.age++

console.log(john);
console.log(jonathan);

const numbers=[1,2,3,4];
const nums=numbers;//copy by reference

nums.push(5);
console.log(numbers);
console.log(nums);


const jonathanDeepCopy={
    name:john.name,
    age:john.age,//copy by value (john.age is a num)
    //address:john.address //copy by reference
    address:{
        city: john.address.city,
        pincode:john.address.pinCode
    }
};

jonathanDeepCopy.age++; //34
jonathanDeepCopy.address.pinCode=100101;

console.log(john);
console.log(jonathanDeepCopy);


