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
var reverseList = function(head) {
    if(head == null || head.next == null) return head
    if(head.next.next == null) {
        tail = head.next
        head.next = null
        tail.next = head

        return tail
    }
    tmp = head.val
    head.val = head.next.val
    head.next.val = tmp
    
    tail = reverseList(head.next.next)
    tmp = tail
    head.next.next = null
    
    while(tail.next != null) {
        tail = tail.next
    }
    
    tail.next = head
    
    return tmp
};