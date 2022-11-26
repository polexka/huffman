import '../styles/index.css';

import findFrequence from '../utils/findFrequence';
import Form from "../components/Form";
import BinarySearchTree from '../components/BinarySearchTree';
import getElementsByPriorities from '../utils/getElementsByPriorities';
import huffmanEncode from '../utils/huffmanEncode';

function ObjToText(obj) {
  var res = '';
  for (var i in obj) {
    res += `"${obj[i].value}": ${obj[i].priority}, `;
  }
  return res;
}

function handleSubmit(id) {
  if (id == 'encode') {
    formDecode.enableForm();

    const frequences = findFrequence(formEncode.getTextArea());
    // console.log(frequences);
    const frequencesByPriorities = getElementsByPriorities(frequences);
    // console.log(frequencesByPriorities);

    formDecode.setTextArea(ObjToText(frequencesByPriorities));
    huffmanEncode(frequencesByPriorities);

    formDecode.setTextArea(formDecode.getTextArea() + ObjToText(getElementsByPriorities(frequences)));

  } else {
    formEncode.enableForm();
    // formEncode.setTextArea(formDecode.getTextArea());
  }
}

const formEncode = new Form('encode', handleSubmit);
const formDecode = new Form('decode', handleSubmit);

formEncode.setEventListeners();
formDecode.setEventListeners();

const BST = new BinarySearchTree();
BST.insert(11); // establishes root node 
BST.insert(7);
BST.insert(9);
BST.insert(15);

BST.insert(6);

// BST.inOrderTraverse(BST.root, console.log); //нужный обход, выводит значения в пор-ке возрастания
// console.log('...');
// BST.postOrderTraverse(BST.root, console.log);
// console.log('...');
// BST.preOrderTraverse(BST.root, console.log);
