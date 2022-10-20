function f(){
    const john={
        name:"john",
        age:32
    };

    function g(){
        console.log('i am g');
    }
    return g;
}

//g and h refer to the same function in memory

const h=f();
h();
