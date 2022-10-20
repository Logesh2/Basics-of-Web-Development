//Jan -> 0, Dec->11
//a date object represents a point in time
const independenceDay=new Date(1947, 7, 15);
console.log(independenceDay); //GMT
console.log(independenceDay.toLocaleDateString());
console.log(independenceDay.toLocaleTimeString());

console.log(independenceDay.getFullYear()); //1947
console.log(independenceDay.getMonth());//7(Aug)
console.log(independenceDay.getDate());//15
console.log(independenceDay.getDay());//sun ->0, sat->6

const indDayPlus15=new Date(1947,7,15);
indDayPlus15.setDate(independenceDay.getDate()+15); //30
console.log(indDayPlus15);

const today=new Date(); //current date and time
console.log(today.getHours()); //10


Date.prototype.getFormattedDate=function(){
    const date= this.getDate().toString().padStart(2,'0');
    const month=(this.getMonth()+1).toString().padStart(2,'0');

    return `${date}-${month}-${this.getFullYear()}`;

};

console.log(today.getFormattedDate());