
import PriorityQueue from '../components/PriorityQueue';

//сюда подается объект формата {a: num, b:num, ...}, возвращает приоритетную очередь
// в виде массива [{value, priority}, {}, ...]
function getElementsByPriorities(obj) {
  const queue = new PriorityQueue();
  const frequencesByPriorities = [];

  const entries = Object.entries(obj);
  console.log(entries);

  for (const [value, priority] of entries) {
    queue.enqueue({value, priority})
  }

  for (const [value, priority] of entries) {
    const element = queue.dequeue();

    frequencesByPriorities.push(element); //на этом моменте все ломается и зависает?????????????
  }

  // for (var key of keys) {
    
  //   queue.enqueue({
  //     value: key,
  //     priority: obj[key]
  //   })

  //   // console.log({
  //   //   value: key,
  //   //   priority: obj[key]
  //   // });
  // }

  // for (var key of keys) {
  //   frequencesByPriorities.push(queue.dequeue());
  // }

  return frequencesByPriorities;
}

export default getElementsByPriorities;