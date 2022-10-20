//ES2015 introduced a class called promise

function sum(x,y)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(
            function(){
                if(typeof x!=='number' || typeof y!=='number')
                {
                    reject(new Error('At least one of the arguments was not a number'));
                    return;
                }
                resolve(x+y);
            },
            3000
        );
    });
}

async function calculateSerialSums(){
    console.log(2);
    try{
    //After 3 seconds when the promise resolves, it resumes execution
    const result1=await sum(12,13);  //The function pauses execution on this line
    console.log('result1=',result1);

    const result2=await sum(result1,13);  
    console.log('result2=',result2);

    const result3=await sum(result2,13);  
    console.log('result3=',result3);


}catch (error){
    console.log(error.message);
}
console.log(3);


}

console.log(1);
calculateSerialSums();
console.log(4);