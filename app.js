// // task 1
let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining); 




// // task 2
let arr = [3, 8, 15, 22, 7, 14, 30, 2, 18, 25];
let maxNumber = Math.max(...arr);
console.log(maxNumber);




// // task 3
let originalArray = [2, 4, 6, 8, 10];
let doubledArray = [...originalArray];

let c = doubledArray.map(a => {
    return a * 2
})
console.log(originalArray)
console.log(c);



// // task 4
let text = "32,31,34,36,31";
let array = text.replaceAll("," , ";")
console.log(array)

let array2 = text.split(",");
let modifiedText = array2.join(";");
console.log(modifiedText);


// // task 5
let data = ["Vusal, 1998", "Ahmad, 1990", "Safar, 2005"];
function sortByBirth(arr) {
    return arr.sort((a, b) => {
        let yearA = (a.split(', ')[1]); 
        let yearB = (b.split(', ')[1]);
        return yearA - yearB;
    });
}
console.log(sortByBirth(data));


// task 6
const number = [1, 2, 3, 4, 5, 6, 7, 8];
function countEvensAndOdds(arr3) {
    const evens = arr3.filter(num => num % 2 === 0).length;
    const odds = arr3.filter(num => num % 2 !== 0).length; 

    return { evens, odds };
}

console.log(countEvensAndOdds(number));













