class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value !== undefined) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    // if the list is empty
    if (!this.head) {
      return null;
    }

    // if the list contains only one value
    if (this.head === this.tail) {
      const poppedValue = this.head.value;

      this.head = null;
      this.tail = null;

      this.length = 0;

      return poppedValue;
    }

    let currentNode = this.head;

    // Traverse the list to find the second-to-last node
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    const poppedValue = this.tail.value;

    this.tail = currentNode;
    this.tail.next = null;
    this.length -= 1;

    return poppedValue;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this.newNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const shiftedValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return shiftedValue;
    }

    const shiftedValue = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return shiftedValue;
  }

  getFirstNode() {
    return this.head;
  }

  getLastNode() {
    let tempNode = this.head;

    while (tempNode) {
      if (!tempNode.next) {
        return tempNode;
      }

      tempNode = tempNode.next;
    }

    return tempNode;
  }

  get(index) {
    let tempNode = this.head;
    let counter = 0;

    while (tempNode) {
      if (counter === index) {
        return tempNode.value;
      }

      counter += 1;
      tempNode = tempNode.next;
    }
    return null;
  }

  set(value, index) {
    let tempNode = this.head;
    let counter = 0;
    while (tempNode) {
      if (counter === index) {
      }
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList);

console.log(myLinkedList.getFirstNode());
console.log(myLinkedList.getLastNode());
console.log(myLinkedList.get(4));
