import { ListNode } from "./ListNode";

class LinkedList{
constructor(
   public start: ListNode | null
){}

public addToTail = (value: any) => {
   if (!this.start){
      this.start = new ListNode(value)
   }
   else{
      let currentNode = this.start
      while(currentNode.next){
         currentNode = currentNode.next
      }
      currentNode.next = new ListNode(value)
   }
}

public find = (value: any):ListNode | null => {

      let currentNode = this.start
      while(currentNode !== null && currentNode.value !== value ){
         currentNode = currentNode.next
      }
      return currentNode
}


}

export {LinkedList}