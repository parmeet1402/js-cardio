// Graphs
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        // add the item in adjacency list
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        // add the item in vertex1 and vertex2
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(){
        // remove from the vertex 1 and vertex2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1);
    }

    removeVertex(vertex){
        // Loop through the items 
        Object.keys(this.adjacencyList).forEach(item => {
            this.removeEdge(vertex, item);
        })
        // Remove the individual vertex
        delete this.adjacencyList[vertex];
    }

    // Depth First Search - Recursive
    depthFirstSearchRecursive(start){
        // list to store the end result to be returned at the very end
        let results = [];

        // store the visited nodes
        let visited = {};

        // helper funcion
        const dfs = (vertex) => {
            // if vertex isn't found, then return
            if(!vertex) return null;

            // mark the vertex as visited
            visited[vertex] = true;

            // add vertex to results list
            results.push(vertex);

            // Loop through the array and recursively call the function on unvisited node
            this.adjacencyList[vertex].forEach(neighhour => {
                if(!visited[neighhour]){
                    dfs(neighhour)
                }
            })


        }

        // Invoke the helper function
        dfs(start);

        // return the results array
        return results;
    }

    // Depth First Search - Iterative
    depthFirstSearchIterative(startingNode){
        // Stack to help us keep track of vertices
        let stack = [startingNode];

        // List to store the end result which is to be restored at the end
        let results = [];

        // object to store the visited vertices
        let visited={}

        // current vertex variable
        let currentVertex;

        // mark the starting node as visited
        visited[startingNode] = true;

        // Loop while the stack isn't empty
        while(stack.length){
            console.log("stack not empty")
            // Pop the next value from the stack
            const currentVertex = stack.pop();

            // add it to the results list
            results.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighhour => {
                // If vertex isn't visited
                if(!visited[neighhour]){
                    // mark it as visited
                    visited[neighhour] = true;
                    stack.push(neighhour);
                }
            })
        }

        console.log(results)
        // return the results array
        return results;

    }

    // Breadth First Search


}


const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")


console.log(graph)

// graph.depthFirstSearchRecursive("A")
graph.depthFirstSearchIterative("A")