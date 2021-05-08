// dijkstra algorithm: It helps find the shortest path

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    //  save each node as object with node and weight property
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(startingVertex, endingVertex) {
    // create an empty priority queue
    const nodes = new PriorityQueue();

    // create a distance object that would hold distance from every vertex
    const distances = {};

    // create a previous object that would hold the last shortest distance from one point to another
    const previous = {};

    // create path array that would hold the list
    let path = []; //to return at end

    // save the smallest distance in this
    let smallest;

    // populate the priority queue, distances object and previous object
    for (let vertex in this.adjacencyList) {
      // Zero for the starting vertex
      if (vertex === startingVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        // Infinity for the remaining ones
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      // Set the key to null for previous object
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      // get the node's value with the least priority count
      smallest = nodes.dequeue().value;

      // check if starting and ending vertex are same
      if (startingVertex === endingVertex) {
        // Build up the path to the end by iterating to the end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      // check if smallest is not null and that it is not having Infinity as distance
      if (smallest || distances[smallest] !== Infinity) {
        // Loop through all the neighbours of the smallest node
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    // return the path list
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
