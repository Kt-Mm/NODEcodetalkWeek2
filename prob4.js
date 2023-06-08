//Using only the filter method on the numbers array, 
//create a function that returns a new array that only contains 
//the numbers divisible by both 3 and 6 but NOT 9. 

//const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

//variable for arr of numbers.
const number = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

//now we create our function
function filterNum(arr){
    return arr.filter((number) => number % 3 === 0 && number % 6 === 0 && number % 9 !== 0);

}

const filterArr = filterNum(number);
console.log(filterArr);