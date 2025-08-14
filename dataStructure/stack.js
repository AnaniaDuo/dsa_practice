// STACK ---> FIRST IN LAST OUT OR LIFO
// insertion O(1) and removal O(1)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push node of val to the beginning of the stack
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let oldFirstNode = this.first;
      this.first = node;
      this.first.next = oldFirstNode;
    }
    // this.size++;
    // return this.size;
    return ++this.size;
  }

  // pop the first of the stack
  pop() {
    if (!this.first) return null;
    let nodeToBePopped = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return nodeToBePopped.val;
  }
}
