
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
                        current.left = newNode;
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


    // breadth first traversal
    bfs(){
        // initialize queue, visisted array and current node with root node
        let queue=[], visited = [], node = this.root;

        // Add the root node to the queue
        queue.push(node);

        // Loop until queue isn't empty
        while(queue.length !== 0){
            // get the first item present in the queue
            node = queue.shift();

            // push the newly deleted out item from the queue
            visited.push(node);

            // if left contains a node, then add it the queue
            if(node.left){
                queue.push(node.left)
            }

            // if right property contains a node, then add it to the queue
            if(node.right){
                queue.push(node.right)
            }
        }
        return visited;
    }

    dfsPreOrder(){
        let visited= [];

        // helper function with current variable
        const traverse = (node) => {
            // push the node to the visited array
            visited.push(node);

            // if left property of the node exists, then call this function on it as well
            if(node.left){
                traverse(node.left)
            }

            // if right property of the node exists, then call this function on it as well
            if(node.right){
                traverse(node.right)
            }
        }

        // call the traverse function for the root node
        traverse(this.root)
        return visited;

    }

    dfsPostOrder(){
        let visited= [];

        // helper function with current variable
        const traverse = (node) => {
            // if left property of the node exists, then call this function on it as well
            if(node.left){
                traverse(node.left)
            }

            // if right property of the node exists, then call this function on it as well
            if(node.right){
                traverse(node.right)
            }

            // push the node to the visited array
            visited.push(node);
        }

        // call the traverse function for the root node
        traverse(this.root)
        console.log(visited)
        return visited;
    }

    dfsInOrder(){
        let visited= [];

        // helper function with current variable
        const traverse = (node) => {
            // if left property of the node exists, then call this function on it as well
            if(node.left){
                traverse(node.left)
            }
            // push the node to the visited array
            visited.push(node);
            
            // if right property of the node exists, then call this function on it as well
            if(node.right){
                traverse(node.right)
            }
        }

        // call the traverse function for the root node
        traverse(this.root)
        console.log(visited)
        return visited;
    }

}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// tree.bfs();
// tree.dfsPreOrder();
// tree.dfsPostOrder();
// tree.dfsInOrder();


