/*
Linked lists are excellent alternative to arrays when insertion and deletion at the beginning are frequently required. O(1) instead of O(n)
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node with val to the end of list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // pop the last node from the list
  pop() {
    if (this.length < 1) return undefined;
    else if (this.length >= 1) {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  // shift list to the left === remove the first node of the list
  shift() {
    if (!this.head) return undefined;
    let oldHeadNode = this.head;
    this.head = oldHeadNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHeadNode;
  }

  // add a node to a list at the beginning
  unshift(val) {
    let node = new Node(val);
    let currentHead = this.head;
    if (!currentHead) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = currentHead;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // get node at index of list
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  // set node at index of list with new value
  set(index, val) {
    const nodeAtIndex = this.get(index);
    if (!nodeAtIndex) return false;
    nodeAtIndex.val = val;
    return true;
  }

  // add a node to list at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    // return the double banks '!!' to get boolean true false answer
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    else {
      let nodeBefore = this.get(index - 1);
      let nodeAfter = nodeBefore.next;
      let newNode = new Node(val);
      nodeBefore.next = newNode;
      newNode.next = nodeAfter;
      this.length++;
    }
    return true;
  }

  // remove a node from a list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let nodeToBeRemoved = prevNode.next;
    let nextNode = nodeToBeRemoved.next;
    prevNode.next = nextNode;
    this.length--;
    return nodeToBeRemoved;
  }

  // reverse a list in place without making a copy of it
  reverse() {
    // switch head and tail
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
// console.log(list);
list.push("1");
// console.log(list);
list.push("2");
// console.log(list);
list.push("3");
console.log(list);
// list.pop();
// console.log("list after popping", list);
// console.log("what pop", list.pop());
// console.log("list after popping", list);
// list.pop();
// console.log("list after popping", list);
// list.pop();
// console.log("list after popping", list);
// list.push("hihi");
// console.log(list.get(3));
// console.log(list.set(3, "love"));
// console.log(list);
console.log(list.reverse());
