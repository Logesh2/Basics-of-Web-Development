const numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
console.log(numbers.sort(function(a,b)
{
    return a-b
}));

console.log(numbers.sort(function(a,b)
{
    return b-a
}));

console.log(numbers.push(37));

numbers.pop()
numbers.pop()
console.log(numbers);


numbers.slice(3,3,'Seven','Eleven');
console.log(numbers);

console.log(numbers.indexOf(23));
console.log(numbers.indexOf(41));


