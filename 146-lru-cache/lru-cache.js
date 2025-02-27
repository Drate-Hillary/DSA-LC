/**
 * Doubly Linked List Node
 */
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * LRU Cache
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // Key -> Node mapping
    this.head = new ListNode(0, 0); // Dummy head
    this.tail = new ListNode(0, 0); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * Moves a node to the front (Most Recently Used)
 */
LRUCache.prototype._moveToHead = function(node) {
    this._removeNode(node);
    this._addNode(node);
};

/**
 * Adds a node right after the head (Most Recently Used)
 */
LRUCache.prototype._addNode = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
};

/**
 * Removes a node from the list
 */
LRUCache.prototype._removeNode = function(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
};

/**
 * Removes the Least Recently Used (LRU) node
 */
LRUCache.prototype._removeLRU = function() {
    let lruNode = this.tail.prev;
    this._removeNode(lruNode);
    this.map.delete(lruNode.key);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this._moveToHead(node); // Move accessed node to front
    return node.value;
};

/**
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.value = value;
        this._moveToHead(node); // Move updated node to front
    } else {
        let newNode = new ListNode(key, value);
        this.map.set(key, newNode);
        this._addNode(newNode);

        if (this.map.size > this.capacity) {
            this._removeLRU(); // Remove least recently used element
        }
    }
};
