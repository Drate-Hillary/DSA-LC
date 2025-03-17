/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    
    if(!root) return 0;

    let leftDepth = 0;
    let rightDepth = 0;
    let leftNode = root;
    let rightNode = root;

    while(leftNode){
        leftDepth++;
        leftNode = leftNode.left;
    }

    while(rightNode){
        rightDepth++;
        rightNode = rightNode.right;
    }

    if(leftDepth === rightDepth){
        return Math.pow(2, leftDepth) - 1;
    }

    return 1 + countNodes(root.left) 
    + countNodes(root.right);
};