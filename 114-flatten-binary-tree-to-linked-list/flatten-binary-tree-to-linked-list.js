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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return;

    flatten(root.left);
    flatten(root.right);

    let temp = root.right;
    root.right = root.left;
    root.left = null;

    let curr = root;
    while(curr.right){
        curr = curr.right;
    }

    curr.right = temp;
};