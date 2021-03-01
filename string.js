// isUnique
const isUnique = (str) => {
  
  if (str.length > 128) return false;

  let arr = new Array(128)
  for(let i=0;i<str.length;i++){
    const count = str.charCodeAt(i);
    if(arr[count]){
      return false;
    }
    arr[count] = true;
  }
  return true;
}

isUnique("fs")


// checkPermutation

// Sol 1 Complexity = O(n log n)
const stringSort = (str) => ([...str].sort((a,b) => a.localeCompare(b)).join())
const checkPermutation = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  return stringSort(str1) === stringSort(str2)
};

checkPermutation("asdf","asdf")

// Sol 2 Complexity = O(n)
const checkPermutation1 = (str1, str2) => {
  if(str1.length !== str2.length) return false;

  const arr = new Array(128).fill(0);

  // add to frequency table
  for (let i = 0; i<str1.length; i++){
    arr[str1.charCodeAt(i)]++;
  }
  console.log(JSON.stringify(arr))

  // subtract from frequency table
  for(let i =0; i<str2.length;i++){
     arr[str2.charCodeAt(i)]--;
      console.log(JSON.stringify(arr))

    if(arr[str2.charCodeAt(i)]<0){
      return false;
    }
  }

  return true;
};

checkPermutation1("aabcda", "aacba")

