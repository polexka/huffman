import '../styles/index.css';

import findFrequence from '../utils/findFrequence';
import Form from "../components/Form";
import { huffmanEncode, huffmanKey } from '../utils/huffmanEncode';
import BinarySearchTree from '../components/BinarySearchTree';

function ObjToText(obj) {
  var res = '';
  for (var i in obj) {
    res += `'${i}': ${obj[i]}  `;
  }
  return res;
}

function handleSubmit(id) {
  if (id == 'encode') {
    formDecode.enableForm();

    const frequences = findFrequence(formEncode.getTextArea());
    // huffmanEncode(formEncode.getTextArea(), frequences);
    formDecode.setTextArea(`${ObjToText(huffmanKey(frequences))}
    _________
${huffmanEncode(formEncode.getTextArea(), frequences)}`);
  } else {
    formEncode.enableForm();
    // formEncode.setTextArea(formDecode.getTextArea());
  }
}

const formEncode = new Form('encode', handleSubmit);
const formDecode = new Form('decode', handleSubmit);

formEncode.setEventListeners();
formDecode.setEventListeners();

// const BST = new BinarySearchTree();
// BST.insert({priority: 2, value: 'f'});
// BST.insertLeft({priority: 1, value: 'b'}); // establishes root node
// BST.insertRight({priority: 1, value: 'g'});
// // BST.insert({priority: 1, value: 'g'});
// // BST.insert({priority: 5, value: 'g'});

// BST.preOrderTraverse(BST.root, console.log);