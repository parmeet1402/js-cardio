/* => Fill Function
Write a function that creates a new array with given values */
const fill = (arraySize, value) => new Array(arraySize).fill(value);
const data = 3;
const valueToFill = "a";
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']

/* => Reverse Function
Write a function that reverts the input array. */
const reverse = array => array.sort((x, y) => y - x);
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]

/* => Compact Function
Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null */
const compact = array => array.filter(item => item);
const data = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data)); // [1, 2, 3]

/* => Object from array
Write a method that returns an object composed of key-value pairs. */
const fromPairs = array => Object.fromEntries(array);
const data = [
  ["a", 1],
  ["b", 2],
];
console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }

/* => Without
The method should return an array without listed values. Let’s try to find a solution when input data only primitive data types. */
const without = (array, ...args) => array.filter(item => !args.includes(item));
const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]

/* => Unique
Write a method that returns a duplicate-free array */
const unique = array => new Array(...new Set(array));
const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]

/* => isEqual
Write a function that compares two arrays and returns true if they are identical. */
const isEqual = (firstArray, secondArray) => {
  let theyAreEqual = true;
  const arrayWithBiggerLength =
    firstArray.length > secondArray.length ? firstArray : secondArray;
  for (let i = 0; i < arrayWithBiggerLength.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      theyAreEqual = false;
    }
  }
  return theyAreEqual;
};
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false

/* => FLatten
Write a function that turns a deep array into a plain array. */
const flatten = array =>
  array.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]
