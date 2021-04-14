
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // insert function
    insert(value){
        // create a new node
        const newNode = new Node(value);

        // check if root exists
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            // initialize the current with the root node
            let current = this.root;

            // Keep looping forever, will only stop once things get returned
            while(true){
                // check if the value is smaller then the current's value
                if(value < current.value){
                    // keep going left if it exists
                    if(current.left){
                        current = current.left;
                    }else{
                        // if left isn't found, then assign the new node and return the tree
                        current.next = newNode;
                        return this;
                    }
                }else{
                    // check if the value is larger then the current's value
                    // keep going left if it exists
                    if(current.right){
                        current = current.right;
                    }else{
                        // if right isn't found, then assign the new node and return the tree
                        current.right = newNode;
                        return this;
                    }
                }
            }
        }

    }

    contains(value){
        if(!this.root) return false;
        let current = this.root;
        while(current && !isFound){
            if(value < current.value){
                current = current.left;
            }else if(value> current.value){
                current = current.right;
            }else{
                return true;
                // found = true;
            }

            // if(!isFound) return undefined;
            // return current;
            return false;
        }
    }
}

const tree = new BinarySearchTree();