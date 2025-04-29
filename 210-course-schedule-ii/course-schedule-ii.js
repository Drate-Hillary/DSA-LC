/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    const adjacent = new Array(numCourses).fill(0).map(()=> []);
    const inDegree = new Array(numCourses).fill(0);
    const res = [];

    for(const [course, prereq] of prerequisites){
        adjacent[prereq].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for(let i = 0; i < numCourses; i++){
        if(inDegree[i] === 0){
            queue.push(i);
        }
    }

    while(queue.length > 0){
        const current = queue.shift();
        res.push(current);

        for(const neighbor of adjacent[current]){
            inDegree[neighbor]--;
            if(inDegree[neighbor] === 0){
                queue.push(neighbor)
            }
        }
    }

    if(res.length === numCourses){
        return res;
    }else{
        return [];
    }
};