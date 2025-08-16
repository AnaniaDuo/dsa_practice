// Insertion O(logn)
// Removal O(logn)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // first push the value we want to insert to the end of value list
    this.values.push(val);

    // bubble up
    // find the parent of the node
    let currentIndex = this.values.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.values[currentIndex] > this.values[parentIndex]) {
        let temp = this.values[currentIndex];
        this.values[currentIndex] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // extract the max number which is the root
  extractMax() {
    // remove the root and replace it with the last element
    let current = this.values.pop();
    if (this.values.length < 2) return this;
    if (this.values.length === 2) {
      if (this.values[0] > this.values[1]) return this;
      else {
        let temp = this.values[0];
        this.values[0] = this.values[1];
        this.values[1] = temp;
        return this;
      }
    }
    let currentIdx = 0;

    while (true) {
      // compare current  with its children and swap with max
      this.values[currentIdx] = current;
      let left = currentIdx * 2 + 1;
      let right = currentIdx * 2 + 2;
      let max = current;
      if (max < this.values[left] || max < this.values[right]) {
        if (this.values[left] > this.values[right]) {
          max = this.values[left];
          this.values[currentIdx] = this.values[left];
          this.values[left] = current;
          currentIdx = left;
        } else {
          max = this.values[right];
          this.values[currentIdx] = this.values[right];
          this.values[right] = current;
          currentIdx = right;
        }
      } else {
        break;
      }
    }
    return this;
  }
}

let heap = new MaxBinaryHeap();
// console.log("heap", heap);
// heap.insert(5);
// console.log("heap", heap);
// heap.insert(9);
// console.log("heap", heap);
// heap.insert(4);
// console.log("heap", heap);
// heap.insert(15);
// console.log("heap", heap);
// heap.insert(11);
// heap.insert(2);
// heap.insert(6);
// console.log("heap", heap);

// heap.extractMax();
// console.log("heap after extracting max", heap);

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log("heap aftering inserting", heap);
heap.extractMax();
console.log("heap after extracting max", heap);
heap.extractMax();
console.log("heap after extracting max 2nd time", heap);
heap.extractMax();
console.log("heap after extracting max 3rd time", heap);
heap.extractMax();
console.log("heap after extracting max 4th time", heap);
heap.extractMax();
console.log("heap after extracting max 5th time", heap);
heap.extractMax();
console.log("heap after extracting max 6th time", heap);
heap.extractMax();
console.log("heap after extracting max 7th time", heap);
heap.extractMax();
console.log("heap after extracting max 8th time", heap);
