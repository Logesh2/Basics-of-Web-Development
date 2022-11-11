const numbers=[10,20,30,40];
numbers.push(50); //[10,20,30,40,50]

//removes last item from the array, and returns it
let num=numbers.pop();
console.log(num); //50
console.log(numbers);//[10,20,30,40]




numbers.splice(2,0,24,25,26);

const baseLocations=['Noida','Bengaluru','Mumbai','Gurugram'];
baseLocations.sort();
console.log(baseLocations);


const nums=[10,200,30,400,20,3000,40,300];

nums.sort(//ascending order
    function(x,y){
        //if(x<y){ //1st number passed to this function should come first
          //  return -1;
        //}

        //if(y<x){//second number passed to this funtion should come first
          //  return 1;
        //}
        //return 0;

        return x-y;
    }
);
console.log(nums);