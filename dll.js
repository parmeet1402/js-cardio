// Node
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        // create a new node
        const node = new Node(value)

        // null check for head
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop(){
        if(this.length===0) return undefined;
        const lastNode = this.tail;

        this.tail = this.tail.prev;
        this.tail.next = null;

        this.length--;

        if(this.length ===0 ){
            this.head= null;
            this.tail.next = null;
            lastNode.prev = null;
        }

        return lastNode;
    }

    // Shift
    // Remove first element in the LL
    shift(){
        // null check on the head
        if(!this.head) return undefined;

        // store the item to be deleted
        const current = this.head;

        // check if only one element is there in the list
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{   
            // Reassign the item to the next one
            this.head = current.next;
            
            // set null for the previous element
            this.head.prev = null;
        }

        // decrease length
        this.length--;
    
        // return the deleted item
        return current;

    }
    // unshift
    // add first element in the LL
    unshift(value){
        // create new node
        const node = new Node(value);
        
        // check for empty list
        if(!this.head){
            // if found empty, then set both the head and tail to be newly created node
            this.head = node;
            this.tail = this.head;
        }else{
            // if found not empty, then:
            // set next of the newly created node to be that of head
            node.next = this.head;

            // set the prev property of the exisisting first element in the LL
            this.head.prev = node;

            // update the head of the LL with the created node
            this.head = node;
        }
        

        // increase the list
        this.length++;

        // Return the deleted item
        return this;

    }
    // get
    // get item present at an index
    get(index){
        // check for the index passed being in bounds
        if (index > 0 || index > this.length) return undefined;
    
        // check if its the first item
        if(index === 0) return this.head;

        // check if its the last item
        if(index === this.length) return this.tail;


        // check which part of the node it would be present accrodingly make the decision on how to iterate the list
        const isFirstHalf = Boolean(this.length/2 > index);

        let current = isFirstHalf ? this.head: this.tail;
        let counter = isFirstHalf? 0:this.length-1;

        if(isFirstHalf){
            while(index !== counter){
                current = current.next;
                counter++;
            }
        }else{
            while(index !== counter){
                current = current.prev;
                counter--;
            }
        }

        // return the found item
        return current;

    }
    // set
    set(index, value){
        // use get 
        const foundItem = this.get(index);

        // check if item hasn't been found
        if(!foundItem) return false;

        // update the value of the found item
        foundItem.value = value;

        return true;
    }
    // Todo: insert
    insert(index, value){

        // check that the item is in bounds
        // check if the item is to be inserted at the start of the array
        // check if the item is to be inserted at the end of the array
        // Else, find one item before using get method
        // check whether the item received isn't falsey
        // if not falsey, then update the value
        // create a new node with the value in it
        // make updates to prev of the next node
        // make upates to next of the prev node
        // add next and prev for the newly added node



    }
    // Todo: remove
    remove(){

    }

}
