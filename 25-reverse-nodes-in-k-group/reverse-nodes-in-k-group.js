/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let curr = head;
    let count = 0;

    while(curr !== null && count < k){
        curr = curr.next;
        count++;
    }

    if(count === k){
        curr = head;
        let prev = null;
        let next = null;
        let temp = 0;

        while(temp < k){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            temp++;
        }

        head.next = reverseKGroup(curr, k);
        return prev;
    }
    return head;
};