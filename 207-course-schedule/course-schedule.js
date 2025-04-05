/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({length : numCourses}, ()=> []);
    const indegree = Array(numCourses).fill(0);

    for(let [course, pre] of prerequisites){
        graph[pre].push(course);
        indegree[course]++;
    }

    const queue = [];

    for(let i = 0; i < numCourses; i++){
        if(indegree[i] === 0) queue.push(i);
    }

    let completeCourses = 0;

    while(queue.length > 0){
        const course = queue.shift();

        completeCourses++;
        for(let neighbor of graph[course]){
            indegree[neighbor]--;
            if(indegree[neighbor] === 0){
                queue.push(neighbor);
            }
        }
    }

    return completeCourses === numCourses;
};