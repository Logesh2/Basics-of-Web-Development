const text= `Text messaging, or texting, is the act of composing and 
sending electronic messages, typically consisting of alphabetic 
and numeric characters, between two or more users of mobile devices, 
desktops/laptops, or another type of compatible computer. 
Text messages may be sent over a cellular network, or may also be sent 
via an Internet connection.`;

console.log(text.includes('cellular'));
console.log(text.includes('flex'));

console.log(text.indexOf('sending'));
console.log(text.indexOf('texting',3));

console.log(text.indexOf('coding'));

console.log(text.replace('texting','text'));

const words=text.split(' ');
console.log(words);

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log('    Hello World   '.trim());