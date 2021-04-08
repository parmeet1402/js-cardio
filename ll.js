class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class SingleyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add element at the end
    push(val){
        // create new node
        const node = new Node(val);
        // Check if head is null
        if(this.head ===  null){
            // Yes - Assign head and tail both to it
            this.head = node;
            this.tail = this.head;

        }else{
            // No - set next pointer of current last item and then update the last item to the newly created node
            this.tail.next = node;
            this.tail = node;
        }
        // increment by one
        this.length++;
        return this;
    }

    pop(){
        // null check on head
        if(!this.head) return undefined;

        // set current and prev element to the head
        let current = this.head;
        let prev = current;

        // Loop until the end of the LL has been reached
        while(current.next){
            prev = current;
            current = current.next;
        }

        // Reasign LL's Tail to the second last item, instead of last item
        this.tail = prev;
        // After reassigning, remove the next from the last item
        this.tail.next = null;

        // decrement the length by 1
        this.length--;

        // check if only one element was there in the list
        if(this.length === 0){
            // If yes, then reset both the head and tail to nulll
            this.head = null;
            this.tail = null;
        }
        return current;

    }
}

let list = new SingleyLinkedList();
list.push(23);
list.push(21);

console.log(list)
