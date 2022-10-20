let quantity=2, pi=3.14;
console.log(quantity);//2
console.log(pi);//3.14
console.log(typeof 100);//number
console.log(typeof quantity);//number
console.log(typeof 'number');//string
let time='night', clocktime='10';
let greetingMorning='Good\' Morning', greetingEvening='Good\' Evening' , 
    greetingNight=`good 
    ${time}. It is now ${clocktime} 'O Clock`;

    console.log( greetingMorning, greetingEvening, greetingNight );
    console.log( greetingMorning[0] );//g
    console.log( greetingMorning[1] );//o
    console.log( greetingMorning.length );//13
    console.log( greetingMorning[greetingMorning.length-1] );//g

    let greetingDay=greetingMorning+' '+greetingEvening;
    console.log( greetingDay ); //Good' Morning Good' Evening
