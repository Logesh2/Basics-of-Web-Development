//we cannot use a variable declared in a block(i.e for loop block, if block, else block) outside it


//for(let i=0;i<10;i++)
//{                     //blocked scope variable
  //  console.log(i);
//}
//console.log('i=',i);//error

for(var j=0;j<10;j++) //not blocked scope variable
{                     
    console.log(j);
}
console.log('j=',j); /// no error