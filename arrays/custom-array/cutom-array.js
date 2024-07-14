class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // get
  get(index) {
    if (index < -1 || index >= this.length) {
      return undefined;
    }
    if (index === -1) {
      return this.data[this.length - 1];
    }
    return this.data[index];
  }

  // push
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // Check if the array is empty.
  // Store the first element to return it later.
  // Shift all elements to the left by one index.
  // Delete the last element (which is now duplicated).
  // Decrease the length property by one.
  // Return the stored first element.

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  // Increase length: Increase the length property by one to make space for the new element.
  // Shift elements to the right: Start from the last element and move each element one position to the right.
  // Insert the new element: Place the new element at the beginning of the array (index 0).
  // Return the new length: Return the updated length property.

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;

    this.length++;

    return this.length;
  }

  // Check for valid index: Ensure the provided index is within the bounds of the array.
  // Store the element to delete: Save the element at the given index to return it later.
  // Shift elements left: Move each element after the index one position to the left.
  // Delete the last element: Remove the duplicated last element.
  // Decrease length: Decrement the length property by one.
  // Return the deleted element: Return the stored element that was deleted.
  // 1 2 3 4 5
  // index - 1
  // to delete 2
  // for loop to left shift
  // delete the last duplicate element
  deleteByIndex(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const itemToDelete = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return itemToDelete;
  }
}

const myArray = new MyArray();
console.log(myArray.push("apple"));
console.log(myArray.push("orange"));
console.log(myArray.push("mango"));
console.log(myArray.data);
console.log(myArray.length);
console.log(myArray);

console.log(myArray.get(1));
console.log(myArray.get(-1));

console.log(myArray.pop());

console.log(myArray);
console.log(myArray.get(-1));

console.log(myArray.shift());
console.log(myArray);

console.log(myArray.unshift("banana"));
console.log(myArray);

console.log(myArray.push("apple"));
console.log(myArray.push("pineapple"));
console.log(myArray);

console.log(myArray.deleteByIndex(1));
console.log(myArray);
