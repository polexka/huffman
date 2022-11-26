import BinarySearchTree from "../components/BinarySearchTree";

function huffmanEncode(sortedELements) {
  const code = {};
  const BST = new BinarySearchTree();

  // console.log(sortedELements);
  // console.log('...');

  while (sortedELements.length > 1) {
    // const firstElement = sortedELements.shift();
    // const left = firstElement.priority;
    // // console.log(firstElement);
    // const secElement = sortedELements.shift();
    // const right = secElement.priority;

    // BST.insert(left);
    // BST.insert(right);

    // sortedELements.unshift({
    //   value: (firstElement.value + secElement.value),
    //   priority: (1 + firstElement.priority + 1 + secElement.priority + 1  - 3)
    // })
    // console.log('...');
    // sortedELements = getElementsByPriorities(sortedELements);

    // // console.log(sortedELements);
  }

  console.log('...');
  // BST.preOrderTraverse(BST.root, console.log);
}

export default huffmanEncode;