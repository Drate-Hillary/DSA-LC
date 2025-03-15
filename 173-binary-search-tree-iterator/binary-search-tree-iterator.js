/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * BSTIterator class for in-order traversal
 */
var BSTIterator = function(root) {
    this.stack = [];
    this._pushAllLeft(root);
};

// Helper function to push all left nodes to the stack
BSTIterator.prototype._pushAllLeft = function(node) {
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};

/**
 * @return {number} - Returns the next smallest number in the BST
 */
BSTIterator.prototype.next = function() {
    if (!this.hasNext()) {
        throw new Error("No more elements in the BST.");
    }

    const node = this.stack.pop(); // Get the next node
    this._pushAllLeft(node.right); // Push all left nodes of the right subtree
    return node.val; // Return the value of the node
};

/**
 * @return {boolean} - Returns whether there are more elements in the BST
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

