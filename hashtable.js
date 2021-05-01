// Hashtables
class HashTable {
    constructor(size=17){
        this.keyMap = new Array(size);
    }

    hash(key){
        // initialize the total and weird_prime varibales with 0 and a prime number respectively
        let total = 0;
        let WEIRD_PRIME = 31;
        
        // Loop through max 100 times
        for(let i = 0; i < Math.min(key.length, 100);i++){
            // initiaize the char variable with the element present at the i index
            let char = key[i];

            // from the keycode of first character subtract 96
            let value = char.charCodeAt(0) - 96;

            // calculate the new value for total variable 
            total = (total*WEIRD_PRIME+value) % this.keyMap.length;
        }

        // return the value
        return total;
    }

    set(key, value){
        // create index variable which will store the hashed value
        const index = this.hash(key);

        // if bucket isn't created at a particular index
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        
        // Push the key & value pair to the bucket
        this.keyMap[index].push([key, value]);
    }

    get(){
        // create index variable which will store the hashed value
        let index = this.hash(key);

        // only search if the bucket exists
        if(this.keyMap[index]){
            // loop through the values of a bucket
            for(let i =0; i< this.keyMap.length;i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }

        }

        return undefined;
    }

    values(){
        let resultArray = [];
        const filterArray = this.keyMap.filter(item => item);
        // nested looping 
        filterArray.forEach(arr => {
            arr.forEach(item => {resultArray.push(item[1])})
        })
        return resultArray;
    }

    keys(){
        let resultArray = [];
        const filterArray = this.keyMap.filter(item => item);
        // nested looping 
        filterArray.forEach(arr => {
            arr.forEach(item => {resultArray.push(item[0])})
        })
        return resultArray;
    }
}


let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.keys();
// console.dir(JSON.stringify(ht))