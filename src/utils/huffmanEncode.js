import BinarySearchTree from "../components/BinarySearchTree";
import PriorityQueue from "../components/PriorityQueue";

function traverse(object, arg) {
  var code = {}

  if (object.node.left != null && object.node.right != null) {
    const codeLeft = traverse(object.node.left, arg + '0');
    const codeRight = traverse(object.node.right, arg + '1');
    code = Object.assign(code, codeLeft, codeRight);
  }
  object.code = arg;

  if (object.value.length < 2) {
    code[`${object.value}`] = arg;
  }

  return code;
}

function huffmanKey(frequencesArr) {
  const priorityQueue = new PriorityQueue();

  for (var i in frequencesArr) {
    priorityQueue.enqueue({
      value: i,
      priority: frequencesArr[i]
    });
  }

  while (priorityQueue.size() > 1) {
    const left = priorityQueue.dequeue();
    const right = priorityQueue.dequeue();
    const root = {
      value: (left.value + right.value),
      priority: (left.priority + right.priority)
    }

    const node = new BinarySearchTree();
    node.insert(root);

    if (left.node != null) {
      node.insertLeft({
        value: left.value,
        priority: left.priority,
        node: left.node
      });
    } else {
      node.insertLeft(left);
    }

    if (right.node != null) {
      node.insertRight({
        value: right.value,
        priority: right.priority,
        node: right.node
      });
    } else {
      node.insertRight(right);
    }

    root.node = node.root;
    priorityQueue.enqueue(root);
  }

  const result = priorityQueue.dequeue();
  const code = traverse(result, '');
  return code;
}

function huffmanEncode(text, frequencesArr) {
  const code = huffmanKey(frequencesArr);
  var result = '';
  for (var i in text) {
    result += `${code[text[i]]} `;
  }
  return result;
}

export { huffmanEncode, huffmanKey };

// const BST = new BinarySearchTree();
// BST.insert(11); // establishes root node
// BST.insert(7);
// BST.insert(9);
// BST.insert(15);

// BST.insert(6);

// BST.inOrderTraverse(BST.root, console.log); //нужный обход, выводит значения в пор-ке возрастания
// console.log('...');
// BST.postOrderTraverse(BST.root, console.log);
// console.log('...');
// BST.preOrderTraverse(BST.root, console.log);
