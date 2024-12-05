// task 1
let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining); 




// task 2
let arr = [3, 8, 15, 22, 7, 14, 30, 2, 18, 25];
let maxNumber = Math.max(...arr);
console.log(maxNumber);




// task 3
let originalArray = [2, 4, 6, 8, 10];
let doubledArray = [...originalArray];

for(i=0; i < originalArray.length; i++){
    console.log(doubledArray[i]*2);
}

console.log(originalArray); 



// task 4
let text = "32,31,34,36,31";
let array = text.replaceAll("," , ";")
console.log(array)

let array2 = text.split(",");
let modifiedText = array2.join(";");
console.log(modifiedText);








