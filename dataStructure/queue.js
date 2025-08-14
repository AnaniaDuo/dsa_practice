// QUEUE ---> FIRST IN FIRST OUT OR FIFO
// insertion O(1) and removal O(1)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push node of val to the end of the stack
  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    // this.size++;
    // return this.size;
    return ++this.size;
  }

  // pop the first of the stack
  dequeue() {
    if (!this.first) return null;
    let nodeToBePopped = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return nodeToBePopped.val;
  }
}
