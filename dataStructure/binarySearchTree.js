/**
 * Binary Search Tree (BST)
 * Insertion O(logn)
 * Searching O(logn)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a node to a binary tree
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if ((current.value = val)) return undefined;
        else if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find a node in BST
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) current = current.left;
      else if (val > current.value) current = current.right;
      else found = true;
    }
    return found;
  }
}
