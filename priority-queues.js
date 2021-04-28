// Priority queues using Min-heaps

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueues{
    constructor(){
        this.values = []
    }

    // enqueue method
    enqueue(value, priority){
        // accepts value and priority
        // create a new node
        const node = new Node(value, priority);
        this.values.push(node);
        bubbleUp();
    }

    bubbleUp(){
        // get the newly pushed item's index & value
        let index = this.values.length - 1;
        const element = this.values[index];

        // loop until the pushed item isn't having 0 or less
        while(index > 0){
            // get the parent's index and value
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values(parentIndex);

            // break if the parent's value is smaller then the current element
            if(element.priority >= parent.priority) break;

            // swap the valeus
            this.values[parentIndex] = element;
            this.values[index] = parentValue;
            index = parentIndex
        }
    }

    // dequeue method
    dequeue(){
        const min = this.values[0];
        const end = this.values[this.values.length-1];
        this.values[0] = end;
        this.sinkDown()
        return min;
    }

    sinkDown(){
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIndex = 2*index +1;
            let rightChildIndex = 2*index+2;
            let leftChild, rightChild;
            let swap = null;

            // before accessing the values, we need to check the indexes being out of bounds
            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]

                // check if the element's value is smaller than the left child
                if(leftChild.priority<element.priority){
                    swap = leftChildIndex
                }
            }

            if(rightChildIndex.priority < length.priority){
                rightChild = this.values[rightChildIndex];

                // cehck if the elemnt's value is smaller than the right child and bigger then the left child or check if the value is smaller then both of them
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIndex;
                }
            }

            // if no swap index is assigned then break the loop
            if(swap === null) break;

            // swap the values
            this.values[index] = this.values[swap];
            this.values[swap] = elemnt;

            // assign the index as swap item's index
            index = swap;
        }
    }
}

