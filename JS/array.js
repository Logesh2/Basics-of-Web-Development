const numbers=[10, 20, 30, 40, 'fifty'];

console.log(numbers[0]);//10
console.log(numbers[4]);//'fifty'
console.log(numbers[5]);//undefined

numbers[0]=numbers[1]+numbers[2];//30
console.log(numbers);

numbers[5]=60;
console.log(numbers);

numbers[8]=90;
console.log(numbers);

console.log(numbers[6]); //undefined
console.log(numbers[7]); //undefined
console.log(numbers[8]);//90

//Push to add new items at the end of the array

numbers.push(100);
console.log(numbers);


//length property
console.log(numbers.length);

console.log(typeof numbers);
console.log(numbers instanceof Array);


const matrix=[
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

console.assertlog(matrix[2][1]);  //80

