/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!postorder.length || !inorder.length) return null;

    const rootVal = postorder.pop();
    const root = new TreeNode(rootVal);
    const inorderIndex = inorder.indexOf(rootVal);

    root.right = buildTree(inorder.slice(inorderIndex + 1), postorder.slice(inorderIndex));
    root.left = buildTree(inorder.slice(0, inorderIndex), postorder.slice(0, inorderIndex));

    return root;
};