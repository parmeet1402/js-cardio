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
