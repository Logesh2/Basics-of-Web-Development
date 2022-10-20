function nthFibanocciNumber(n)
{
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    return nthFibanocciNumber(n-2)+nthFibanocciNumber(n-1);
}

console.log(nthFibanocciNumber(10));
console.log(nthFibanocciNumber(1));
console.log(nthFibanocciNumber(2));
console.log(nthFibanocciNumber(15));