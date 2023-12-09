let numberList = [1 , 2, 3, 4 , 5 , 6 ,7 ,8 , 9 ,10];
console.log(numberList)
document.write(numberList + '<br>')


let Numbers = [1 , 2 , 3 , 4 , 5 , 6 ,7, 8, 9,  10, 11, 12, 13,  14 , 15,  16, 17 , 18, 19,  20];

function  showNumber(){
    for (number of Numbers)
    if (number > 0) {
        console.log(number)
    }
}
showNumber()
// adding new element to array
Numbers.push(22)
console.log(Numbers)
//create a function that delete the even numbers
function filterNumbers(){
    const oddNumbers = Numbers.filter(number => number % 2 !== 0);
    console.log(oddNumbers)
    document.write(oddNumbers)
}
filterNumbers()
//return the hieghest number of an array
function hieghestNumber(){
    const hieghest = Math.max(...Numbers);
    console.log(hieghest)
    return
 }
hieghestNumber()

//retrun the lowest number of an array
function lowestNumber(){
    const lowest = Math.min(...Numbers);
    console.log(lowest)
}

lowestNumber()
//Create a function to change all of the text to lowercase
let introduction = 'HELLO EVERYBODY, I AM A JUNIOR WEB DEVELOPER.I ENJOY WORKING WITH CODES AND LEARNING NEW THINGS.';
function lowerCasechanger(){
    let change = introduction.toLowerCase();
    console.log(change)
    return
}
lowerCasechanger()
//create a function to change all of the text to uppercase
let myFamily = 'my name is atefa , i live here with my family. i have five brothers but no any sister, i would like to have a sister to play with her and talk to her';
function uppercaseChanger(){
    let change = myFamily.toUpperCase();
    console.log(change)
    return
}
uppercaseChanger()
//create a function to recive an array the names and change the first letter of each name to uppercase
let femCoders = ["arefa", "helena", "deisire", "maria", "diana"];
function capitalizeWords(femCoders) {
    return femCoders.map(femCoder => {
      const firstLetter = femCoder.charAt(0).toUpperCase();
      const rest = femCoder.slice(1).toLowerCase();
      return firstLetter + rest;
    });
  }

  console.log(capitalizeWords(femCoders))