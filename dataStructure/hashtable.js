// hashing function using prime

function hashtable(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (WEIRD_PRIME * total + value) % arrayLen;
  }
  return total;
}

console.log(hashtable("pink", 18));
console.log(hashtable("pink", 18));
console.log(hashtable("pink", 19));
console.log(hashtable("this is the greatest movie", 19));

// class HashTable
// insert, deletion, access O(1)
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let WEIRD_PRIME = 31;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // use separate chaining
  _set(key, value) {
    let index = this._hash(key);
    this.keyMap[index] = [...this.keyMap[index], [key, value]];
  }

  // get whole array of key value from key
  _get(key) {
    let index = this._hash(key);
    let chain = this.keyMap[index];
    for (let arr of chain) {
      if (arr[0] === key) return arr;
    }
    return undefined;
  }

  _keys() {
    let keysArr = [];
    for (let ele of this.keyMap) {
      if (ele) {
        for (let k = 0; k < ele.length; k++) {
          keysArr.push(ele[k][0]);
        }
      }
    }
    return keysArr;
  }

  _values() {
    let valuesArr = [];
    for (let ele of this.keyMap) {
      if (ele) {
        for (let k = 0; k < ele.length; k++) {
          if (!valuesArr.includes(ele[k][1])) valuesArr.push(ele[k][1]);
        }
      }
    }
    return valuesArr;
  }
}
