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
            
            
                const result = x+y;

                resolve(result);
            },
            3000
        );
    });
}

//the promise object has 2 methods - then(), catch()
//when we call then-Hey promise! Whenevr you resolve please call function, pass the result 
sum(12,13)
    .then(
    function(result1){//f1
        console.log('result1=',result1);
        //if we return promoise then
        return sum(result1,14); //p1
    }
)
.then(
    function(result2){//f2
        console.log('result2=',result2);
        return sum(result2,15);

    }
)

.then(
    function(result3){//f3
        console.log('result3=',result3);
        return sum(result3,15);

    }
)


.catch(
    function(error)
    {                //g
        console.log(error.message);
    }
);