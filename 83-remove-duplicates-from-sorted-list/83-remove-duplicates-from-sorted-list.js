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
var deleteDuplicates = function(head) {
    
    if(!head) return null
    
    prev = curr = head
    
    while(curr.next!==null){
        if(prev.val === curr.val){
            prev.next = curr.next
            curr = curr.next
        } else {
            prev = prev.next
            curr = curr.next
        }
    }
    
    if(prev.val === curr.val) {prev.next = null}
    return head;
};
