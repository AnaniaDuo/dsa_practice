/** DOUBLY LINKED LIST
 * Insertion O(1)
 * Removal O(1)
 * Searching O(n)
 * Access O(n)
 *
 * Better than Singly Linked List for finding nodes and can be done in
 * half of the time.
 * But take up more memory considering extra pointer
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // push a node to the end of the list
  push(val) {
    let newTail = new Node(val);
    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      newTail.prev = this.tail;
      this.tail.next = newTail;
      this.tail = newTail;
    }
    this.length++;
    return this;
  }

  // pop the last node of the list
  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.prev;

      currentTail.prev = null;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return currentTail;
  }

  // removing a node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // adding a node to the beginning of the doubly linked list
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  // accessing the node by its position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middleIndex = Math.floor(this.length / 2);
    let counter = 0;
    let current;
    if (index <= middleIndex) {
      current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      while (counter < this.length - index - 1) {
        current = current.prev;
        counter++;
      }
    }
    return current;
  }

  // replace value at index of list to new val
  set(index, val) {
    let nodeToBeSet = this.get(index);
    if (foundNode != null) {
      nodeToBeSet.val = val;
      return true;
    }
    return false;
  }

  // add a node in a list by a certain position
  insert(index, val) {
    if (index < 0 || index > list.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === list.length) return !!this.push(val);

    let newNode = new Node(val);
    let currentNodeAtIndex = this.get(index);
    let prevNode = currentNodeAtIndex.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currentNodeAtIndex;
    currentNodeAtIndex.prev = newNode;
    this.length++;
    return true;
  }

  // remove a node in list by a certain position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let nodeToBeRemoved = this.get(index);
    let prevNode = nodeToBeRemoved.prev;
    let afterNode = nodeToBeRemoved.next;

    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    nodeToBeRemoved.next = null;
    nodeToBeRemoved.prev = null;
    this.length--;

    return nodeToBeRemoved;
  }
}

let list = new DoublyLinkedList();
list.push("2");
list.push("3");
list.push("4");
// console.log("list is", list);
// list.pop();
// console.log("list after pop", list);
list.push("9");
list.push("10");
console.log("list at 3 is 9", list.get(3));
