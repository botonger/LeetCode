/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(head == null || head.next == null) return head;
    if(head.length == 1) return head;
    
    cc = head;
    
    tmp = head.val;
    head.val = head.next.val;
    head.next.val = tmp;
    
    head.next.next = swapPairs(head.next.next)

    return head;
};