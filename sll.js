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

    // delete element at the end
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


    // Remove first element in the LL
    shift(){
        // null check on the head
        if(!this.head) return undefined;

        // set current element to the head
        const current = this.head;

        // set the head to the next item of the head
        this.head=this.head.next;

        // decrease the length by 1
        this.length--;

        // Check if only one element was there in the list
        if(this.length ===0){
            // If yes, then reset head to null
            this.tail = null;
        }
        return current;
    }


    // Adding a new node to the beginning of the list    
    unshift(value){
        // create a new node based on the value passed
        const node = new Node(value)

        // null check on head
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return this;
    }


    get(index){
        // Index must be positive and must not be more than the length of the linked list
        if(index < 0 || index >= this.length) return null;

        // set counter to zero
        let counter =0;

        // assign the current with the first node in the list
        let current = this.head;

        // loop until the index is reached
        while(counter!==index){
            current = current.next;
            counter++;
        }

        // return the found element
        return current;
    }

    set(index, value){
        // get the ndoe using get function
        const foundNode = this.get(index);
        
        // if node isn't found then return false
        if(!foundNode) return false;

        // if node is found then update the value and then return true
        foundNode.value = value;
        return true;
    }

    insert(index, value){
        // Index must be positive and must not be more than the length of the linked list
        if(index < 0 || index >= this.length) return null;

     
        // If index is at the last item
        if(index===this.length){
            return this.push(value)
        }

        // if index is for zero index
        if (index === 0){
            return this.unshift(value)
        }

        // create a new ndoe
        const node = new Node(value);


        const foundNode = get(index-1);
        node.next = foundNode.next;
        foundNode.next = node;
        this.length++;
    }

    remove(index){
        // Index must be positive and must not be more than the length of the linked list
        if(index < 0 || index >= this.length) return undefined;

        if(index===this.length - 1){
            this.pop();
        }

        if(index ===0){
            this.shift()
        }

        let counter = 0, prev=this.head, current=this.head;

        while(counter!==index){
            prev = current;
            current = current.next;
            counter++;
        }

        prev.next = current.next;
        this.length--;

    

    }
}

let list = new SingleyLinkedList();
list.push(23);
list.push(21);
// list.shift()
list.get(1)

// console.log(list)
