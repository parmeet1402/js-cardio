
// Linear Search
const linearSearch = (arr, query) => {
    for(let i =0;i<arr.length;i++){
      if(arr[i]===query){
        return i;
      }
    }
    return -1;
  }
  
linearSearch([23,1,23,12,34,12,23],12)



// Binary Search
const binarySearch = (arr, query) => {
    let high = arr.length-1, mid, low = 0;
  
    while(low <= high){
      mid = high + low / 2;
      if(arr[mid]<query){
        low = mid + 1;
      }else if(arr[mid]>query){
        high = mid - 1;
      }else{
        return mid;
      }
    }
    return -1;
}
  
binarySearch([ 2, 3, 4, 10, 40 ] ,4)