

//function sum(x,y){
//    return (x*x)+(y*y);
//}
//function sum1(x,y){
  //  return (x*x*x)+(y*y*y);
//}

//console.log(sum(2,3));
//console.log(sum1(2,3));



function sum(x,y,transform)
{
    return transform(x)+transform(y);
}

function square(n)
{
    return n*n;
}

function cube(n)
{
    return n*n*n;
}

console.log(sum(2,3,square));
console.log(sum(2,3,cube));
