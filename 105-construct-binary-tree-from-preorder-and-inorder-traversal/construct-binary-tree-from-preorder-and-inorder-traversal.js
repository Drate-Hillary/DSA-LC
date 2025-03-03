/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;

    const rootVal = preorder.shift();
    const root = new TreeNode(rootVal);
    const inorderIndex = inorder.indexOf(rootVal);

    root.left = buildTree(preorder, inorder.slice(0, inorderIndex));
    root.right = buildTree(preorder, inorder.slice(inorderIndex + 1));

    return root;
};