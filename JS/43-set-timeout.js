//asynchronous function(does not deliver results immediately)
//asynchronous function will return before completion of its task.


//setTimeout only request Node/browser

setTimeout(
    function foo(){
        console.log('foo executed');
    },
    3000 //3000millisecond = 3seconds
);

console.log('end of script');