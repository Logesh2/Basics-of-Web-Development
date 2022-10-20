const phones = [
    {
        name: "Samsung Galaxy S10+ Plus",
        price: 620,
        type: "refurbished",
        manufacturer: "Samsung",
    },
    {
        name: "Apple iPhone 7 Plus",
        price: 450,
        type: "refurbished",
        manufacturer: "Apple",
    },
    {
        name: "One Plus 6",
        price: 430,
        type: "new",
        manufacturer: "OnePlus"
    },
    {
        name: "Apple iPhone Xs",
        price: 910,
        type: "new",
        manufacturer: "Apple"
    },
    {
        name: "One Plus 7",
        price: 430,
        type: "refurbished",
        manufacturer: "OnePlus",
    },
    {
        name: "Apple iPhone 8 Plus",
        price: 610,
        type: "new",
        manufacturer: "Apple",
    },
];


// generated would be [ 'Samsung Galaxy S10+ Plus', 'Apple iPhone 7 Plus', ... ]
// [ "Samsung Galaxy S10+ Plus", "Apple iPhone 7 Plus", "One Plus 6", ...  ]
const phoneNames = phones.map(
    function( phone, idx ) {
        console.log( idx );
        return phone.name;
    }
);
console.log( phoneNames );



// const pnames = [];
phones.forEach(
    function( phone, idx ) {
        phone.price *= 1.05;
        // pnames.push( phone.name );
    }
);
console.log( phones );
// console.log( pnames );

// • Create a new array with details of only the new phones/ the helper must return true (item is selected) / false (item is not selected)
const newPhones = phones.filter(
    function( phone ) {
        return phone.type === 'new';
    }
);
console.log( newPhones );

// • Find the first phone whose price is less than $500 and print it
const firstNewPhone = phones.find(
    function( phone ) {
        return phone.type === 'new';
    }
);
console.log( firstNewPhone );