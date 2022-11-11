const john={
    name:'john',
    age:32
};

//copy by reference for non-primitives
//both john and jonathan refer to the same object in memory


const jonathan=john;
//sum refers to the function in memory
function sum(x,y)
{
    return x+y;
};

//both add and sum refer to the same function in memory
const add=sum;

console.log(add(12,13));