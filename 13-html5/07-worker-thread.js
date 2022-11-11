const getSum = ( number ) => {
    let sum=0;

    for(let i=1; i<= number; i++){
        sum+=i;
    }

    return sum;
};

//when the data is received from the parent, start the operation
onmessage = ( event ) =>{
    const number = event.data.number;
    const sum = getSum( number );

    postMessage({
        sum
    });
}

