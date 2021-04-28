// Binary Heap
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        // get the the newly pushed item's index & value
        let index = this.values.length - 1;
        const element = this.values[index];

        // loop until the pushed item isn't having index 0 or less
        while(index>0){
            // get the paren't index and value
            let parentIndex = Math.floor((index-1/2));
            let parentValue = this.values[parentIndex];

            // break if the paren't value is bigger then the current element's, it means its already at the correct position
            if(element <= parentValue) break;

            // swap the values
            this.values[parentIndex] = element;
            this.values[index] = parentValue;
            index = parentIndex;
        }
    }

    extractMax(){// swap the first and last element in the array
        const max = this.values[0];
        const end = this.values[this.values.length-1];
        this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown(){
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            // find left and right index
            let leftChildIndex = 2*index+1;
            let rightChildIndex = 2*index+2;

            let leftChild, rightChild;
            let swap = null;

            // Before accessing the values, we need to check for indexes being out of bounds
            if(leftChildIndex<length){
                leftChild = this.values[leftChildIndex]
                // check if the element's value is smaller than the left child
                if(leftChild>element){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]

                // check if the element's value is smaller than the right child and bigger then left child or check if the value is smaller than both of them
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIndex;
                }
            }
            
            // if no swap index is assigned then break the loop
            if(swap === null) break; 

            // swap the values
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            
            // assign the index as swap item's index
            index = swap; 
        }
    }
}



let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log({heap})