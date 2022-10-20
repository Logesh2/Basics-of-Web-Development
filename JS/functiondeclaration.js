//In the first pass variable are given space in the memory, and functions are defined(for the earlier syntax)
//In the second pass it executes the code
const sum2=function(x,y){
    const result=x+y;
    return result;
}
let a=12;
const res=sum2(a,13);
console.log(res);