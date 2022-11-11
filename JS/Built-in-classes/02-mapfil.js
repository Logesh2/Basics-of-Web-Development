const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
days.forEach(
    function(days){
        console.log(days);
    }
);

const noOfLetters=days.map(function(day){
    return day.length;
});

console.log(noOfLetters);

const StoZ=days.filter(function(day){
    return(/^([s-z S-Z])$/.test(day[0]));
});
console.log(StoZ);

const ext6=days.filter(function(day){
    return day.length===6;
});

console.log(ext6);

