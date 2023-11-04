/* Filename: ComplexCodeExample.js */

// This code demonstrates a complex implementation of a data structure called BST (Binary Search Tree)
// It includes methods for insertion, deletion, searching, and balancing the tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    
    let currentNode = this.root;
    
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
  
  search(value) {
    let currentNode = this.root;
    
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    
    return false;
  }
  
  remove(value) {
    const removeNode = (node, value) => {
      if (!node) {
        return null;
      }
      
      if (value === node.value) {
        if (!node.left) {
          return node.right;
        }
        
        if (!node.right) {
          return node.left;
        }
        
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    
    this.root = removeNode(this.root, value);
  }
  
  balance() {
    const sortedArray = this.inOrderTraversal();
    this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1);
  }
  
  buildTree(sortedArray, start, end) {
    if (start > end) {
      return null;
    }
    
    const mid = Math.floor((start + end) / 2);
    const node = new Node(sortedArray[mid]);
    
    node.left = this.buildTree(sortedArray, start, mid - 1);
    node.right = this.buildTree(sortedArray, mid + 1, end);
    
    return node;
  }
  
  inOrderTraversal() {
    const result = [];
    
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };
    
    traverse(this.root);
    
    return result;
  }
}

// Example usage:

const myBST = new BST();
myBST.insert(5);
myBST.insert(3);
myBST.insert(7);
myBST.insert(2);
myBST.insert(4);
myBST.insert(6);
myBST.insert(8);

console.log(myBST.search(6)); // true
console.log(myBST.search(9)); // false

myBST.remove(4);
console.log(myBST.search(4)); // false

myBST.balance();
console.log(myBST.search(6)); // true
console.log(myBST.search(7)); // true
console.log(myBST.search(8)); // true