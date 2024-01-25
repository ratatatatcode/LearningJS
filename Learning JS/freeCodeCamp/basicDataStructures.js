// Javascript Algorithms and Data Structures / Basic Data Structures
// (I'm not sure if everything written here are correct. Please, do make some research by yourself.)

// I forgot to start this note from the beginning.
// I'm already at 50%

/*
// Here are some of methods I learned.
arr.push(num); // add num from the end
arr.unshift(num); // add num from the beginning

arr.pop(); // remove the last element
arr.shift(); // remove first element

arr.splice(0, 2);
// Delete from index 0 to index 2

// arr.splice(0, 2, third and so on..., 3, 4, 5);
// Delete from index 0 to index 2 and the 3,4,5 will replace the previous value of index 0-2

newArr = arr.splice(0, 2)
// You can use this to copy all the recently removed elements from the array

arr.indexOf('check');
// You can use this to check if the element 'check' still exists in the array.
// If there is no element 'check' in the array, it will return a value of -1.

// Iterate Through All an Array's Items Using For Loops
// I used a hint for this one. I didn't realize that I can use indexOf for this purpose.
function filteredArray(arr, elem) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// Output: [ [ 10, 8, 3 ], [ 14, 6, 23 ] ]

// Create complex multi-dimensional arrays
// I also used a hint for this one too.
let myNestedArray = [
  'level 1', // [0]
  ['level 2'], // [1][0]
  [['level 3','deep']], // [2][0][0]
  [[['level 4','deeper']]], // [3][0][0][0]
  [[[['level 5','deepest']]]] // [4][0][0][0][0]
];

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };

// You can add new property using dot notation and the name of the property after it.
tekkenCharacter.origin = 'South Korea';

// In the code below, I used bracket notation to add a new property.
tekkenCharacter['hair color'] = 'dyed orange';
console.log(tekkenCharacter);

// Output:
// {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true,
//     origin: 'South Korea',
//     'hair color': 'dyed orange'
// }

// Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

// Access Property Names with Bracket Notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples")); // Output: 25
*/