// a class for the linked lists
class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  // adds value to the start of the list
  append(data) {
    console.log(`hi, appending ${data}`);
    // call Node class with data and this.head and assign it to this.head to make the given value the head of the list
    this.head = new Node(data, this.head);
  }

  // method to prepend something to the back of the list
  prepend(data) {
    console.log(`hi, prepending ${data}`);

    let node = new Node(data);
    let current;

    // if the head is empty make this the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  //returns the last node in the list
  tail() {
    console.log("hi from tail :-)");
    if (!this.head) return null;
    let tail = this.head;
    while (tail.next != null) {
      tail = tail.next;
    }
    console.log("the last node on the list is ", tail);
    return tail;
  }
  // head returns the first node in the list
  returnHead() {
    console.log("returning head bzzbzz", this.head);

    return this.head;
  }
  // size

  // returns the total number of nodes in the list
  getSize() {
    let count = 0;
    // assign the current state to the same as head.
    let current = this.head;
    // loop while current is not null
    while (current !== null) {
      // increment count by everytime
      count++;
      // assign current to be the "address" of the next list
      current = current.next;
    }
    // return the count variable when while loop is exited
    return count;
  }

  // returns the node at the given index
  at(index) {
    if (index < 0) return null;
    let position = 0;
    let current = this.head;
    // while loop while position is not the same as index :D
    while (position !== index) {
      // if  node does not exist return null
      if (!current.next) {
        console.log("bzzbzz oh no.. no data :--(");
        return null;
      }
      // make current the next node :D
      current = current.next;
      position++;
    }
    // while loop breaks and we return the current value of current
    console.log("bzz bzz data from the index", index, "is", current.data);
    return current.data;
  }

  //removes the last element from the list
  pop() {
    let previous;
    let current = this.head;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    console.log(
      "bzz bzz",
      previous.next,
      "just got popped into the trash from the bottom of the list"
    );
    previous.next = null;
  }

  //returns the index of the node containing value, or null if not found.
  find(data) {
    let position = 0;
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        console.log(
          " bzz bzzfound your data(",
          data,
          ") at index nr:",
          position
        );
        return position;
      }
      current = current.next;
      position++;
    }
    console.log(" bzz bz.....cant find data sad :_-(");
    return null;
  }

  //that inserts a new node with the provided value at the given index
  InsertAt(data, index) {
    if (index < 0 || index > this.getSize()) {
      console.log("your index is either too big or below 0  :--D ");
      return;
    } else if (index === 0) {
      console.log(`bzzbzz your index was 0 so appending ${data} to the head`);
      this.append(data);
      return;
    }
    let node = new Node(data);
    let current = this.head;
    let counter = 0;
    // we will assign currents value here at while loop
    let previous;

    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }
    console.log(`bzz bzz assinging ${data} into a node at index ${index} `);
    previous.next = node;
    counter++;
  }
}
class Node {
  // if no value supplied = null
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

// create a new linked list
const list = new linkedList();

list.append(199);
list.prepend(100);
list.append(391491934913);
list.prepend(39393);
list.InsertAt(666, 4);
list.at(4);
list.InsertAt(59, 5);
list.at(5);
list.returnHead();
list.at(1);
list.at(2);
list.at(3);
list.at(4);
list.pop();
list.prepend(20);
list.pop();
list.at(5);
list.at(39);
list.find(4);
list.at(4);
list.at(5);
list.tail();
list.prepend(39);
list.find(39);
list.append(88);
list.find(88);

// console.log(list.getSize());
// console.log(list);
// console.log(list.contains(100));
// console.log(list.returnHead(), "returning head");

// console.log(list);
// console.log(list);

// console.log(list.tail());

// console.log(list.returnHead());

// console.log(list);
