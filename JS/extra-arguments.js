function foo(x,y)
{
    let sum=0;
    for(let i=0; i<arguments.length;i++){
        console.log(arguments[i]);
        sum+=arguments[i];
    }
    return sum;
}

console.log(foo(12,13,14));
console.log(foo(12,13,14,15));