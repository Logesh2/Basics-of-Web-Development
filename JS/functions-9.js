

function exponentfactory(a){
    if(a==2){
        return sq;
    }
    if(a==3){
        return cube;
    }
    {
        return exp;
    }

    function sq(a){
        return a*a;
    }
    function cube(a){
        return a*a*a;
    }
    function exp(a){
        return a;
    }

}

let fn=exponentfactory(2);
console.log(fn(5));