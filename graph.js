// Graphs
class Graphs{
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
}


const graph = new Graph();
