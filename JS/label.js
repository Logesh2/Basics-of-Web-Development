//list out prime nos from 1 - 100
let num,div;
loop://label for outer loop

for(num=2;num<=100;num++)
{
    for( div=2;div<num/2;div++)
    {
        if(num%div===0)
        
        {
            continue loop;
        }
    }

console.log(num);
}