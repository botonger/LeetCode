/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head
    
    curr = head
    while(head.next != null) {
        if (head.next.val === val) {
            head.next = head.next.next
        }
        else head = head.next
        // console.log(head, curr)
    }

    if(curr.val == val) curr = curr.next
    return curr
}
