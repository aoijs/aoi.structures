export default class LinkedNode {
  value: any;
  next: LinkedNode | null;
  
  constructor(value:any) {
    this.value = value;
    this.next = null;
  }
}

