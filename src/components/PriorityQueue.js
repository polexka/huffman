class Queue {
  constructor() {
    this._data = [];
  }

  //добавить эл-т в очередь
  enqueue(element) {
    this._data.push(element);
  }

  //убрать эл-т из очереди
  dequeue() {
    return this._data.shift();
  }

  //проверка на пустоту
  isEmpty() {
    return this._data.length === 0;
  }

  size() {
    return this._data.length;
  }

  clear() {
    this._data.length = 0;
  }

}

//сортировка осуществляется при извлечении элемента, извлечение будет медленным, зато добавление будет происходить в один шаг

class PriorityQueue extends Queue {
  enqueue(element) {
    if (element.priority === undefined) {
      throw newError("У объекта отсутствует поле priority");
    } else {
      super.enqueue(element);
    }
  }

  dequeue() {
    let priority = this._data[0].priority;
    let position = 0;
    this._data.forEach((element, i) => {
      if(element.priority < priority) {
        priority = element.priority;
        position = i;
      }
    });
    return this._data.splice(position, 1)[0];
  }
}

export default PriorityQueue;