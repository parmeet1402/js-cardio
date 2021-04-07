
// Helper Methods
// Helps swap in the array
const swap = (arr, idx1, idx2) => {
[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};


// Bubble Sort
// Its focus is to bubble up the larger elements towards the top
const bubbleSort = arr => {
    // On nearly sorted array, noSwap could help exit early, if no swaps are done in the loop
    let noSwaps = true;
    // Iterate from the end to beginning
    for(let i=arr.length;i>0;i--){
        noSwaps = true;
        for (let j = 0;j<=i;j++){
            // Check whether next item is smaller than the current item, If it is, then we must swap both the variables
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }   
        }

        if(noSwaps) break;
    }
    return arr;
}
// console.log(bubbleSort([5,3,4,1,2]))



// Selection Sort
// Its focus is to find the minimum element and put it at the beginnning of the array
const selectionSort = arr => {
    // Iterate array from beginning to end
    for (let i=0; i<arr.length;i++){
        // initialize the minimum element's index as i
        let minIndex = i;

        // Irerate from just the next item after i index to the end
        for(let j=i+1;j<arr.length;j++){
            // If a value lower then the current minimum element is found then assign the new index
            if(arr[minIndex]>arr[j]){
                minIndex = j;
            }
        }

        // Swap values, only if its already in the right practice
        if(minIndex !== i){
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }
    return arr;
}

//  console.log(selectionSort([5,3,4,1,2]))
// Insertion Sort
// Its focus is to sort all the visited items
const insertionSort = arr => {
    // Iterate array from beginning to end
    for (let i = 1;i<arr.length;i++){
        const currentValue = arr[i];
        // Initialize J with the prev index to i
        let j = i-1;
        // Loop until:
        // 1. J isn't at the start of the array 
        // 2. Value at J index is greater then the value at I index
        while(j>=0 && arr[j]>currentValue){
            // swap values
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            j--;
        }
    }
    return arr;
}

// console.log(insertionSort([5,3,4,1,2]))

// Merge Sort

// - Helpers
const mergeSortedArrays = (arr1, arr2) =>{
    let pointer1 = 0, pointer2 = 0, mergedArr = [];
    // Loop until end of one array is reached
    while(pointer1<arr1.length && pointer2 < arr2.length){
        // check pointer at which item is bigger
        if(arr1[pointer1]<arr2[pointer2]){
            mergedArr.push(arr1[pointer1])
            pointer1++;
        }else{
            mergedArr.push(arr2[pointer2])
            pointer2++;
        }
    }


    // add any pending item from array 1
    while(pointer1 < arr1.length){
        mergedArr.push(arr1[pointer1])
        pointer1++;
    }

    // add any pending item from array 2
    while(pointer2 < arr2.length){
        mergedArr.push(arr2[pointer2]);
        pointer2++;
    }
    return mergedArr;
}

// - Sort Function
const mergeSort = (arr) =>{
    if(arr.length <=1) return arr;
    const midPoint = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, midPoint));
    const right = mergeSort(arr.slice(midPoint));
    return mergeSortedArrays(left, right)
}

// console.log(mergeSort([8,3,5,4,7,6,1,2]))



// Quick Sort
//  - Helpers
//    Pivot Helper helps us find the correct index of an item in the array
const pivotHelper = (arr, leftPointer = 0, rightPointer = arr.length -1) => {
  

    // Initialize pivotIndex to leftPointer's position and pivotItem as item at that index
    let pivotIndex = leftPointer;
    let pivotItem = arr[pivotIndex]

    // Initialize i to the index next to leftPointer's index
    let i = leftPointer+1;

    // Loop until i index and right pointer's are same
    while(i<=rightPointer){

        // If a value which should be to the left of the pivotItem, then index is iterated and that item gets swapped
        if(pivotItem > arr[i]){
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
        i++;
    }
    // swap the values between left pointer and the pivotIndex
    swap(arr, leftPointer, pivotIndex);
    return pivotIndex;
    

}
  
//  - Sort Functionality
const quickSort = (arr,left=0, right= arr.length - 1) => {
    if(left<right){
        const pivotIndex = pivotHelper(arr, left, right);

        // left sub-array
        quickSort(arr, left, pivotIndex - 1)

        // right sub-array
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
};

console.log(quickSort([8,3,5,4,7,6,1,2]))



// Radix Sort
//  - Helpers
//    Helps find the digit at any place in the number
const getDigitAtAPlace = (num, i) => {
    // 1. Convert number to positive, if negative
    // 2. Divide the positive number by 10 raise to the power the digit's place
    // 3. Floor the result 
    // 4. Get the remainder present at one's place
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}

//    Helps count the number of digits in a number
const countDigits = (num) => {
    // 1. If number is zero, then return 1, since the program will result to -Infinity
    if(num === 0) return 1;
    // 2. Convert number to positive, if negative
    // 3. Find the base-10 log of the value
    // 4. Floor the value
    // 5. Add 1 to it
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

//   Find the maximum count of digits
const findMaxDigitsCount = (arr) => {
    let maxDigits = 0;
    for(let i =0; i< arr.length;i++){
        maxDigits = Math.max(maxDigits, countDigits(arr[i]))
    }
    return maxDigits;
}


const radixSort = (arr) => {

    // 1. Find max count of digits in the array
    const maxDigits = findMaxDigitsCount(arr)

    // 2. Loop the same number of times as the max count of digits
    for(let k = 0; k< maxDigits;k++){
        // create digit buckets
        let digitBuckets = Array.from({length: 10}, () =>[]);

        // Loop through the array and put the values in their respective buckets
        for(let i = 0; i<arr.length;i++){
            digitBuckets[getDigitAtAPlace(arr[i], k)].push(arr[i])
        }

        // Combine the array back after an iteration has got completed
        arr=[].concat(...digitBuckets)
    }


    return arr;

}

// console.log(radixSort([1556,3,3434,2232,1233,122,434,9999]))
