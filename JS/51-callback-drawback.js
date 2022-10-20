function sum(x,y, callback){
    setTimeout(
        function foo() {
            callback(x+y);
        },
        3000
    );
}


sum(12,13,function(result1)
{
    console.log('result1=',result1);
    sum(result1,14,function(result2)
    {
        console.log('result2=',result2);
    })
})//callback hell, complex code by using nested