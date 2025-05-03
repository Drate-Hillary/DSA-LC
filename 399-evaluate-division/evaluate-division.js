/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};

    function addEdge(from, to, value){

        if(!graph[from]){
            graph[from] = {};
        }
        graph[from][to] = value;
    }

    for(let i = 0; i < equations.length; i++){

        const [a, b] = equations[i];
        const value = values[i];

        addEdge(a, b, value);
        addEdge(b, a, 1 / value);

    }

    function bfs(start, end){
        
        if(!graph[start] || !graph[end]){
            return -1.0;
        }

        if(start === end) return 1.0;

        const queue = [[start, 1.0]];
        const visited = new Set();
        visited.add(visited);

        while(queue.length > 0){

            const [current, product] = queue.shift();

            for(const neighbor in graph[current]){
                if(neighbor === end){
                    return product * graph[current][neighbor];
                }

                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push([neighbor, product * graph[current][neighbor]])
                }
            }
        }

        return -1.0;
    }

    return queries.map(([c, d]) => bfs(c, d));
};