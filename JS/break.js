//break -> stop execution of the loop

//1+2+3

let sum=0,idx;
for(idx=0;idx<1000;idx++)
{
   sum=sum+idx;
   if(sum>=1000)
   {
    break;
   }
}
console.log(idx,sum);