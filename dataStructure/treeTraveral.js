/**
 * Breadth First Search BFS
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.left = null;
    this.right = null;
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

  breadthFirstSearch() {
    let queue = [];
    let visitedNodes = [];

    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift;
      visitedNodes.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visitedNodes;
  }

  // parent node -> left -> right
  depthFirstSearchPreOrder() {
    let visitedNodes = [];
    function traverseHelperFunc(node) {
      visitedNodes.push(node.value);
      if (node.left) traverseHelperFunc(node.left);
      if (node.right) traverseHelperFunc(node.right);
    }

    traverseHelperFunc(this.root);
    return visitedNodes;
  }

  // left -> right -> parent node
  depthFirstSearchPostOrder() {
    let visitedNodes = [];

    function traverseHelperFunc(node) {
      if (node.left) traverseHelperFunc(node.left);
      if (node.right) traverseHelperFunc(node.right);
      visitedNodes.push(node.value);
    }

    traverseHelperFunc(this.root);
    return visitedNodes;
  }

  // left -> parent node -> right
  depthFirstSearchInOrder() {
    let visitedNodes = [];

    function traverseHelperFunc(node) {
      if (node.left) traverseHelperFunc(node.left);
      visitedNodes.push(node.value);
      if (node.right) traverseHelperFunc(node.right);
    }

    traverseHelperFunc(this.root);
    return visitedNodes;
  }
}
