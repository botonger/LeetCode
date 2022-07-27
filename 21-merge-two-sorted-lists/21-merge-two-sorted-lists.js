
var mergeTwoLists = function(list1, list2) {
    // if(!list1 && !list2) return null
    
    if(!list1) {
        return list2
    } else if(!list2) {
        return list1
    }
    
    head = curr = new ListNode(0)
    
    while (list1 && list2){
        if (list1.val < list2.val) {
            curr.next = list1 
            list1 = list1.next 
        }
        else{
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    curr.next = list1 || list2  
    return head.next

};