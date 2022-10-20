const john={
    'full name':'john',
    'age':32,
    emails:[
        'john@gmailcom',
        'john@pubicisgroupe.com'
    ],
    address:{
        city:'Mumbai',
        pincode:400101
    }
};

const city=john.address.city;
const address=john.address;

console.log(city, address, address.pincode);

const numbers=[1,2,3,4];
for(let i=0, length=numbers.length;i<length;i++){
    console.log(numbers[i]);
}
