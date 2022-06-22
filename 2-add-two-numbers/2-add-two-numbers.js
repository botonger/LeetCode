/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, upper=0) {
    
    let value = l1.val+l2.val + upper
    upper = Math.floor(value/10)
    let result = new ListNode(value%10)

    if(l1.next !== null || l2.next !==null || upper !=0){ 
        if(!l1.next) l1.next = new ListNode(0)
        if(!l2.next) l2.next = new ListNode(0)
    
        result.next = addTwoNumbers(l1.next, l2.next, upper)
    }
    
    return result
};