/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return null;

    let queue = [root];

    while (queue.length > 0) {
        let size = queue.length;
        let prev = null;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (prev) {
                prev.next = curr;
            }
            prev = curr;

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    return root;
};
