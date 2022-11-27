class Node {
  constructor({ priority, value, node }) {
    this.data = priority; // node value
    this.value = value;
    this.node = node || this; //this.root
    if (node === null) {
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // корень bst
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode); // helper method below
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insertLeft(data) {
    let newNode = new Node(data);

    this.root.left = newNode;
  }

  insertRight(data) {
    let newNode = new Node(data);

    this.root.right = newNode;
  }

  inOrderTraverse(node, callback) {
    if (node != null) {
      this.inOrderTraverse(node.left, callback);
      callback(node);
      this.inOrderTraverse(node.right, callback);
    }
  }

  preOrderTraverse(node, callback) {
    if (node != null) {
      callback(node);
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }
  }

  postOrderTraverse(node, callback) {
    if (node != null) {
      this.postOrderTraverse(node.left, callback);
      this.postOrderTraverse(node.right, callback);
      callback(node);
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}

export default BinarySearchTree;