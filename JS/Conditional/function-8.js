function sum(x,y,transform)
{
    return transform(x)+transform(y);
}

function sumArray(arr,transform)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=transform(arr[i]);
    }
    return sum;
    
}

function sumArray(arr,transform){
    let sum=0;
    for(let j=0;j<arr.length;j++)
    {
         sum+=transform(arr[j]);
    }
}

function cube(n)
{
    return n*n*n;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([1,2,3]));
